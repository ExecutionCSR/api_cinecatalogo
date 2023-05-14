const { DataTypes } = require('sequelize');
const connection = require('../database/database.js');

const categorias = connection.define('categorias', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING(500),
        allowNull: false
    }
});

module.exports = categorias