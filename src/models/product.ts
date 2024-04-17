import db from '../db/connection';
import { DataTypes } from 'sequelize';

const Product =db.define('Product',{
    imei:{
        type: DataTypes.NUMBER
    },
    name:{
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.STRING
    },
    enabled:{
        type: DataTypes.BOOLEAN
    },
    ownerfullname:{
        type: DataTypes.STRING
    }

},
{
    freezeTableName: true,
    createdAt:false,
    updatedAt:false
  })
export default Product;