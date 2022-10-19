const { success } = require("./message");

module.exports = (data, app) => {
	app.get("/articles", (req, res) => {
		const message = " Voici la liste de tous les articles:";
		res.json(success(message, data));
	});
};
