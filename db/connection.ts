import { Sequelize } from "sequelize";

const db = new Sequelize('curso-node-ts', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

export default db;