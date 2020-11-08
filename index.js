const express = require("express");

const app = express();

const fs = require("fs");

const location = "dataBase";

const path = require("path");

app
	.get("/createFile", (req, res) => {
		fs.writeFile(
			path.join(location, `${new Date()}.txt`),
			`${new Date()}`,
			function (err) {
				if (err) throw err;
				console.log("Saved!");
			}
		);

		console.log(new Date());
		res.status(200).send(new Date());
	})
	.listen(8001);
