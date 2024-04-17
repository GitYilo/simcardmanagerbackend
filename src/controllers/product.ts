import {Request,Response} from 'express';
import Product from '../models/product';

export const getProducts= async (req:Request,res:Response)=>{
   const listadoProduct = await Product.findAll();  
   res.json(listadoProduct)
     
}

export const getProduct= async (req:Request,res:Response)=>{
   const {id} = req.params
   const product = await Product.findByPk(id);  
   res.json(product)
   
}
export const deleteProduct= async (req:Request,res:Response)=>{
   const {id} = req.params
   const product = await Product.findByPk(id); 
   if (!product) {
      res.json({
         msg:`no existe el producto +${id}`,
      })
   } else {
      await product.destroy();
      res.json({
         msg:"Se ha eliminado el producto",
      })
   }
}
export const postProduct= async (req:Request,res:Response)=>{
   const {body} = req
   await Product.create(body);
   res.json({
      msg:"Esto crea un producto",
      body
   })
}
export const updateProduct= async (req:Request,res:Response)=>{
   const {body} = req;
   const {id} = req.params;
   const product = await Product.findByPk(id); 
   if (product) {
      await product.update(body);
   res.json({
      msg:"Esto Actualiza un producto",
      id,
      body
   })
   } else {
      res.status(404).json({
         msg:"no existe el producto",
         id,
      })
   }
   
}