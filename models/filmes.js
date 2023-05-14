const { DataTypes } = require('sequelize');
const connection = require('../database/database.js');

const filmes = connection.define('filmes', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data_lancamento: {
        type: DataTypes.DATE,
        allowNull: false
    },
    sinopse: {
        type: DataTypes.STRING(500),
        allowNull: false
    },
    nota: {
        type: DataTypes.NUMBER,
        allowNull: true
    }
});
module.exports = filmes