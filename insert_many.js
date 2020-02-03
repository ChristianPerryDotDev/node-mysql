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
	
	// Insert Many Into Table
	const sql = "INSERT INTO customers (name, email) VALUES ?";
	const values = [
		['Tim', 'tim@tim.com'],
		['Tina', 'tina@tina.com'],
		['Laura', 'laura@laura.com'],

	]
	con.query(sql, [values], function (err, result) {
		if (err) throw err;
		console.log("Records Inserted: " + result.affectedRows);
	})
});