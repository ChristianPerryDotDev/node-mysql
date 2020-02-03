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
	
	const sql = "SELECT * FROM customers";
	con.query(sql, function (err, result, fields) {
		if (err) throw err;
		let i;
		for (i = 0; i < result.length; i++) {
			console.log(result[i].name);
		};
	});
});