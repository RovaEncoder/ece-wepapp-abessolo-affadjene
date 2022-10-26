import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
	<header className="container">
		<div className="logo">
			<Link href="#">
				<Image src="../public/images/logo4.png" />
			</Link>
		</div>
		<nav>
			<div className="navBar">
				<button
					className="humberger"
					type="button"
					aria-label="Toggle navigation"
					aria-expanded="false"
				>
					<span></span>
					<span></span>
					<span></span>
				</button>
				<div className="navLinks">
					<Link href="/" aria-current="page">
						Acueil
					</Link>
					<Link href="/about">A propos</Link>
					<Link href="/projets">Projets</Link>
				</div>
			</div>
		</nav>
		<h1 className="name">ABESSOLO Christ Rova</h1>
		<p className="dev-you-need">Le developpeur qu'il vous faut</p>
	</header>;
};

export default Navbar;
