import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('simcardmanager', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' 
  });
  export default sequelize;