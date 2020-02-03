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
	
	const sql = "SELECT name FROM customers ORDER BY id DESC";
	con.query(sql, function (err, result, fields) {
		if (err) throw err;
		console.log(result);
	});
});