const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'marpolos',
    password: 'marcelle2208',
    database: 'mydb'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Connected!');
    /* connection.query('CREATE DATABASE mydb', function(err, result) {
        if (err) throw err;
        console.log('Database create!');
    }); */
    /* const sql = 'CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))';
    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log('Table created!');
    })  */
    const alterSql = 'ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY';
    connection.query(alterSql, (err, result) => {
        if (err) throw err;
        console.log('Table altered!');
    });
});
