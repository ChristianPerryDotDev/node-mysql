const mysql = require('mysql');

console.log('Hello world');


// Create a connection
const con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "nodedb",

})

// Order By

con.connect((err) => {
	if (err) throw err;
	console.log("Connected to the database!");
	
	// const sql = "UPDATE customers SET name = 'John Elder' WHERE id = 1";
	const sql = "SELECT * FROM customers"
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log(result);
	});
});