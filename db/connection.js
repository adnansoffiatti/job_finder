const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite', //qual banco vai usar
    storage: './db/app.db' //onde vai ficar, sqlite tem extesao .db
});

// exportando
module.exports = sequelize;