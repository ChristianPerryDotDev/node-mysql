const mysql = require('mysql');

console.log('Hello world');


// Create a connection
const con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "nodedb",

})

// Connect to MySQL

con.connect((err) => {
	if (err) throw err;
	console.log("Connected to the database!");
	
	const sql = "INSERT INTO customers (name, email) VALUES ('Steve', 'steve@steve.com')";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log(result);
	})
});