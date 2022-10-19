// // Necessary imports
// const url = require("url");
// const qs = require("querystring");
// const fs = require("fs");

// module.exports = {
// 	serverHandle: function (req, res) {
// 		const route = url.parse(req.url);
// 		const path = route.pathname;
// 		const params = qs.parse(route.query);

// 		if (path === "/hello") hello(req, res);
// 		else if (path === "/") home(req, res);
// 		else if (path === "/about") about(req, res);
// 		else erreur(req, res);
// 	},
// };

// //OK
// const hello = (req, res) => {
// 	const route = url.parse(req.url);
// 	const path = route.pathname;
// 	const params = qs.parse(route.query);
// 	const content =
// 		"<!DOCTYPE html>" +
// 		"<html>" +
// 		"    <head>" +
// 		'        <meta charset="utf-8" />' +
// 		"        <title>ECE AST</title>" +
// 		"    </head>" +
// 		"    <body>" +
// 		"       <p>Bonjour, je suis </p>" +
// 		"<span>" +
// 		params["name"] +
// 		"</span>" +
// 		"<p>  très ravi de vous presenter mon test </p><spam>" +
// 		"<h3>  Hobies: </h3>" +
// 		"<ul><li>Jeux d'echecs</li>" +
// 		"<li>Football</li>" +
// 		"<li>Musique</li></ul>";

// 	"    </body>" + "</html>";

// 	if (params["name"] === "Abessolo" || params["name"] === "Affadjene") {
// 		res.writeHead(200, { "Content-Type": "text/html" });
// 		res.write(content);
// 		res.end();
// 	} else {
// 		res.writeHead(200, { "Content-Type": "text/html" });
// 		res.write("Hey " + params["name"] + " How are you ?");
// 		res.end();
// 	}
// };

// const home = (req, res) => {
// 	fs.readFile("./content/explanation.html", function (err, data) {
// 		res.writeHead(200, { "Content-Type": "text/html" });
// 		res.write(data);
// 		res.end();
// 	});
// };

// const erreur = (req, res) => {
// 	res.writeHead(404, { "Content-Type": "text/html" });
// 	res.end("404 Not Found");
// };

// const about = (req, res) => {
// 	fs.readFile("./content/content.json", function (err, data) {
// 		if (err) throw err;
// 		res.writeHead(200, { "Content-Type": "application/json" });
// 		res.write(data);
// 		res.end();
// 	});
// };
