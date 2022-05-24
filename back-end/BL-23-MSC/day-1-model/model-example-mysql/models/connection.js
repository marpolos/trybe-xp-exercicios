// connection.js
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    user: 'root',
    password: 'marcelle2208',
    host: 'localhost',
    database: 'model_example'
});

module.exports = connection;