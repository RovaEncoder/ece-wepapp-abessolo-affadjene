const { success } = require("./message");
let db = require("../db/db.js");

exports.modules = (app) => {
	app.get("/articles/:id", (req, res) => {
		const id = parseInt(req.params.id);
		const message = `l'article ayant pour id: ${id}`;
		const element = db.find((element) => element.id === id);
		res.json(success(message, element));
	});
};
