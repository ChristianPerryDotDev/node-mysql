const mysql = require('mysql');

console.log('Hello world');


// Create a connection
const con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",

})

// Connect to MySQL

con.connect((err) => {
	if (err) throw err;
	console.log("Connected to the database!");
	con.query("CREATE DATABASE nodeDB", function (err, result) {
		if (err) throw err;
		console.log("Database Created!");
	});
});