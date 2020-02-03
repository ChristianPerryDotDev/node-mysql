const mysql = require('mysql');

console.log('Hello world');


// Create a connection
const con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "nodedb",

})

// Limit the results

con.connect((err) => {
	if (err) throw err;
	console.log("Connected to the database!");
	
	const sql = "SELECT * FROM customers ORDER BY id DESC LIMIT 2"
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log(result);
	});
});