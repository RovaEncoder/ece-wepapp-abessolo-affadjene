import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./about";
import Contact from "./contact";
import Projet from "./projets";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import "../styles/footer.css";
import "../styles/navbar.css";
import "../styles/about.css";

function MyApp() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/projets" element={<Projet />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default MyApp;
