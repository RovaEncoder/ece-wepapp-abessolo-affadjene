import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Notfound() {
	const route = useRouter();
	useEffect(() => {
		setTimeout(() => {
			route.push("/");
		}, 5000);
	}, []);

	return (
		<div className="w-full md:h-screen flex items-center justify-center flex-col pt-20">
			<h1>Oups</h1>
			<p className="mt-2">
				Cette page n'existe pas: redirection automatique dans 5s ! 😎
			</p>
			<p className="mt-2">
				Retour à l'
				<Link className="underline text-blue-400" href="/">
					Accueil
				</Link>
			</p>
		</div>
	);
}
