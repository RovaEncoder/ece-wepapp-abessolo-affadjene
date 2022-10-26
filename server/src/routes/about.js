module.exports = (data, app) => {
	app.get("/about", (req, res) => {
		res.json(success(message, data));
	});
};
