const mysql = require('mysql');

console.log('Hello world');


// Create a connection
const con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "nodedb",

})

// Where Clause

con.connect((err) => {
	if (err) throw err;
	console.log("Connected to the database!");
	const name_search = "t%";
	const id_search = 1;
	const sql = "SELECT * FROM customers WHERE name LIKE ? OR id = 1";
	con.query(sql, [name_search, id_search], function (err, result, fields) {
		if (err) throw err;
		console.log(result);
	});
});