import express ,{Application,Request,Response}from 'express';
import cors from 'cors'
import routesProduct from '../routes/product';
import db from '../db/connection';


class Server {
    private app: Application;
    private port:string;
    
    constructor() {
        this.app = express();
        this.port=process.env.PORT || '3001';
        this.listen();
        this.middlewares();
        this.routes();
        this.dbconnect();
    }
    /**
     * listen
     */
    listen() {
        this.app.listen(this.port,()=>{
            console.log(`******* APP RUNNING PORT: ${this.port} *******`);
        })
    }

    routes() {
        this.app.get('/',(req: Request,res:Response)=>{
            res.json({
                msg:"******** API RUNNING *******"
            })
        })
        this.app.use('/api/product',routesProduct);
    }
    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
    }
    async dbconnect(){
        try {
            await db.authenticate();
            console.log("******* DB CONNECTED *******");
        } catch (error) {
            console.log(error);
            console.log("******* DB NOT CONNECTED *******");
        }
        
    }
}
export  default Server;