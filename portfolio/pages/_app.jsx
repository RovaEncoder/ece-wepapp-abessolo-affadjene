import About from "./about";
import Contact from "./contact";
import Projet from "./projets";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import { Component } from "react";

function MyApp(Component, pageProps) {
	return(
		<>
			<Navbar />
			<About />
			<Contact />
			<Projet />
			<Footer />
			<Component {...pageProps} />
		</>
	)
}

export default MyApp;
