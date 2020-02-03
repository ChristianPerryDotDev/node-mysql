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
	
	// Important: ALWAYS remember to use WHERE clause
	const sql = "DELETE FROM customers WHERE id = 10";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log(result);
	});
});