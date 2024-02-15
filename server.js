const inquirer = require("inquirer")
const mysql = require("mysql12")
const cfonts = require("cfonts")

// MYSQL connnection 
const connection = mysql.createConnection({
    host: "localhost",
    port: "",
    user: "root",
    password: "",
    database: "employeeTracker_db",

});

// database connection
connection.connect((err) => {
    if (err) throw err;
    console.log("database connected");
    // application start
    start();
});

