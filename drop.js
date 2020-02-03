const mysql = require('mysql');

console.log('Hello world');


// Create a connection
const con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "nodedb",

})

// Drop le table

con.connect((err) => {
	if (err) throw err;
	console.log("Connected to the database!");
	
	const sql = "DROP TABLE IF EXISTS customers"
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log(result);
	});
});