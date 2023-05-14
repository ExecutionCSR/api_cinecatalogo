const sequelize = require('sequelize');
const connection = new sequelize(
    'cinecatalogo',
    'root',
    '',
    {
        'host': 'localhost',
        'dialect': 'mysql',
        'timezone': '-03:00',
        'port': 3306
    }
);
module.exports = connection;