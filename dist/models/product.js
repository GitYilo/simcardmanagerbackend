"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const Product = connection_1.default.define('Product', {
    imei: {
        type: sequelize_1.DataTypes.NUMBER
    },
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    description: {
        type: sequelize_1.DataTypes.STRING
    },
    enabled: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    ownerfullname: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
});
exports.default = Product;
