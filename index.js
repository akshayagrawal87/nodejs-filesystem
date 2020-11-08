(() => {
	const express = require("express");

	const app = express();

	const fs = require("fs");

	const location = "dataBase";

	const path = require("path");

	const port = process.env.PORT || 4000;

	const fileData = [];

	app
		.get("/", (req, res) => {
			res
				.status(200)
				.send(
					"<h1>Welcome to File System</h1><h2>Api 1: /createFile</h2><h2>Api 2: /getAllFiles</h2>"
				);
		})
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
		.get("/getAllFiles", (req, res) => {
			fs.readdir(location, (err, files) => {
				res.status(200).send(files);
				files.forEach((file) => {
					console.log(file);
				});
			});
		})

		.listen(port);
})();
