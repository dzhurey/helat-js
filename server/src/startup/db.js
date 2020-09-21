const mysql = require('mysql')


let mysqlConnection = mysql.createConnection({
    host: process.env.NODE_DB_HOST,
    user: process.env.NODE_DB_USER,
    password: process.env.NODE_DB_PASSWORD,
    database: process.env.NODE_DB_NAME,
    multipleStatements: true
})

mysqlConnection.connect((err) => {
    if (!err) {
        return console.log("Connected.")
    }
    console.log("Connection Failed.", err)

})

module.exports = mysqlConnection