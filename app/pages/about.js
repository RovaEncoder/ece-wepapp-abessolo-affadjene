import React from "react";
import Image from "next/image";
import roro from "../public/images/roro4.png";
import Nabil from "../public/images/Nabil.jpeg";
import campus from "../public/images/campus.jpeg";
import Layout from "../layout/layout";

export default function About() {
	return (
		<>
			<Layout>
				<div className="w-full px-2 flex items-center py-3 flex-col pt-20">
					<p className="uppercase font-bold text-2xl mt-5 dark:text-white text-sky-700">
						Here we are !
					</p>
					<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 my-2 rounded-md bg-white p-5">
						<div className="w-full h-auto shadow-xl flex items-center justify-center p-1">
							<Image
								className="rounded-xl shadow-xl shadow-black-500"
								src={roro}
								width={265}
								height={290}
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
									<i>Je suis prêt</i> à participer au developpement de vos
									projets
								</h4>
								<div className="py-1">
									<p>github </p>
									<p>github </p>
									<p>rova@gmail.com</p>
									<button className="bg-sky-500 hover:bg-sky-500/50 text-white font-bold py-2 px-4 rounded-sm hover:scale-105 ease-in duration-300 cursor-pointer shadow-lg shadow-black-10 mt-2 ">
										En savoir plus
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 rounded-md bg-white  p-5">
						<div className="w-full h-auto shadow-lg flex items-center justify-center p-2">
							<Image
								className="rounded-xl shadow-lg shadow-black-500 "
								src={Nabil}
								width={430}
								height={345}
								alt="Nabil"
							/>
						</div>
						<div className="col-span-2 py-1 dark:bg-white  flex items-center">
							<div className="">
								<h3 className="py-1 ">Nabil Affadjene</h3>
								<p className="py-1 w-full md:pr-10 text-justify ">
									Etudiant à l’ECE-Paris, je suis à vos sevices et je suis très
									passioné par le developpement web. Cela dit, grace à vous(vos
									missions) je serai capable de mettre en pratique toute mes
									compétences
								</p>
								<h4>
									<i>Je suis prêt</i> à participer au developpement de vos
									projets
								</h4>
								<div className="py-1 ">
									<p>github </p>
									<p>github </p>
									<p>rova@gmail.com</p>
									<button className="bg-sky-500 hover:bg-sky-500/50 text-white font-bold py-2 px-4 rounded-sm hover:scale-105 ease-in duration-300 cursor-pointer shadow-lg shadow-black-10 mt-2 ">
										En savoir plus
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className=" w-full fex items-center py-5 md:grid grid-cols-2gap-8  ">
						<p className="uppercase font-bold text-2xl my-4 w-full dark:text-white text-center">
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
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
}
