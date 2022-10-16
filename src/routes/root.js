module.exports = {
	routes: (app) => {
		app
			.route("/about")
			.get((req, res) => res.send("Methode get OK"))

			.post((req, res) => res.send("Methode post OK"));

		app
			.route("/about/:user")
			.put((req, res) => res.send("Methode put OK"))

			.delete((req, res) => res.send("Methode delete OK"));
	},
};
