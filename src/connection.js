const mysql = require('mysql');
const { mysql_database } = require('./config');

const connection = mysql.createConnection(mysql_database)

connection.connect((err, conn) => {
    if(err) {
        console.log('Algo ha fallado en el momento de conectarse');
    }
    
    else {
        console.log('La conexión ha sido existosa');
        return conn
    }
})

module.exports = connection