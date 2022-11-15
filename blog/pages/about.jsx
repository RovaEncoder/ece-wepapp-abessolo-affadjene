import React from "react";
import Image from "next/image";
import roro from "../public/images/roro4.png";
import Nabil from "../public/images/Nabil.jpeg";
import campus from "../public/images/campus.jpeg";

export default function About() {
	return (
		<>
			<div className="w-full px-2 flex items-center py-3 flex-col">
				<p className="uppercase font-bold text-2xl mt-5 text-sky-700">
					Here we are !
				</p>
				<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 my-2 rounded-xl bg-white p-5">
					<div className="w-full h-auto shadow-xl flex items-center justify-center p-1">
						<Image
							className="rounded-xl shadow-xl shadow-black-500"
							src={roro}
							width={300}
							height={350}
							alt="moi"
						/>
					</div>
					<div className="col-span-2 py-1 bg-white  flex items-center">
						<div className="">
							<h3 className="py-1">ABESSOLO Christ Rova</h3>
							<p className="py-1 text-justify w-full md:pr-10">
								Etudiant à l’ECE-Paris, je suis à vos sevices et je suis très
								passioné par le developpement web. Cela dit, grace à vous(vos
								missions) je serai capable de mettre en pratique toute mes
								compétences
							</p>
							<h4>
								<i>Je suis prêt</i> à participer au developpement de vos projets
							</h4>
							<div className="py-1">
								<p>github </p>
								<p>github </p>
								<p>rova@gmail.com</p>
								<button class="bg-sky-500 hover:bg-sky-500/50 text-white font-bold py-2 px-4 rounded-lg hover:scale-105 ease-in duration-300 cursor-pointer shadow-lg shadow-black-10 mt-2 ">
									En savoir plus
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 rounded-xl bg-white  p-5">
					<div className="w-full h-auto shadow-lg flex items-center justify-center p-2">
						<Image
							className="rounded-xl shadow-lg shadow-black-500 "
							src={Nabil}
							width={330}
							height={345}
							alt="moi"
						/>
					</div>
					<div className="col-span-2 py-1 bg-white  flex items-center">
						<div className="">
							<h3 className="py-1 ">Nabil Affadjene</h3>
							<p className="py-1 w-full md:pr-10 text-justify ">
								Etudiant à l’ECE-Paris, je suis à vos sevices et je suis très
								passioné par le developpement web. Cela dit, grace à vous(vos
								missions) je serai capable de mettre en pratique toute mes
								compétences
							</p>
							<h4>
								<i>Je suis prêt</i> à participer au developpement de vos projets
							</h4>
							<div className="py-1 ">
								<p>github </p>
								<p>github </p>
								<p>rova@gmail.com</p>
								<button class="bg-sky-500 hover:bg-sky-500/50 text-white font-bold py-2 px-4 rounded-lg hover:scale-105 ease-in duration-300 cursor-pointer shadow-lg shadow-black-10 mt-2 ">
									En savoir plus
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className=" w-full fex items-center bg-cyan-100/20 py-5 md:grid grid-cols-2gap-8  ">
					<p className="uppercase font-bold text-2xl my-4 w-full text-center">
						Our school
					</p>
					<div className="w-full h-auto flex items-center flex-col py-2 ">
						<div>
							<Image
								className="rounded-lg"
								src={campus}
								width={700}
								height={350}
								alt="campus"
							/>
						</div>
						{/* <div className="w-[700px] bg-white p-2">
							<p className="text-justify w-[375px]:text-sm">
								<a
									className="text-blue-500 font-bold text-2xl"
									href="https://www.ece.fr/"
								>
									L'ECE
								</a>{" "}
								Une école internationale au cœur de Paris. A deux pas de la Tour
								Eiffel, le Campus Eiffel est un campus central, moderne, qui
								facilite les interventions de professionnels français et
								internationaux, les conférences, les rencontres d’entreprises.
								C’est un lieu de transfert des compétences et d’échanges
								d’expériences entre étudiants, professeurs, chercheurs et
								professionnels issus du monde…
							</p>
						</div> */}
					</div>
				</div>
			</div>
		</>
	);
}
