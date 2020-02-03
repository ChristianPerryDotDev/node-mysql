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
	
	// Insert Into Table
	const sql = "INSERT INTO customers (name, email) VALUES ('Mary Smith', 'mary@smith.com')";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Data inserted into table...")
	})
});