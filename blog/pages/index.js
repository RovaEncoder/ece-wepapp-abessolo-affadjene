import React from "react";
import Head from "next/head";
import Accueil from "../components/Accueil";
export default function Home() {
	return (
		<div>
			<Head>
				<title>Blog</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Accueil />
		</div>
	);
}
