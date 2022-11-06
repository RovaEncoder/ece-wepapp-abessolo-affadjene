export default function Accueil() {
	return (
		<div className="w-full h-screen text-center">
			<div className=" w-full h-full mx-auto flex justify-center">
				<div className="w-full h-1/6 bg-white p-10 ">
					<p className="font-semibold text-2xl ">Notre blog</p>
					<p className="my-2 text-lg">
						Bonjour, nous sommes Abessolo et Affadjene, étudiants à l'ECE-Paris,
						Nous vous présentons notre blog!
					</p>
				</div>
			</div>
			<div className="bloginfo ">
				<p>Ce blogue est réalisé dans le but d'apprendrtre </p>
			</div>
			<div className="info">
				<div className="Rova">
					<div className="photo"></div>
					<div className="info"></div>
				</div>
				<div className="Navil">
					<div className="photo"></div>
					<div className="info"></div>
				</div>
			</div>
		</div>
	);
}
