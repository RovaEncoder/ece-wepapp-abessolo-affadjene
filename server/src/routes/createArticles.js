const { success } = require("./message");
let db = require("../db/db.js");

exports.modules = (app) => {
	app.post("/articles/:id", (req, res) => {
		cosole.log(req.body);
		res.send("Okay");
	});
};
