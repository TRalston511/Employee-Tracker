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