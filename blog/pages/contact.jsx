import Layout from "../layout/layout";

export default function Contact() {
	return (
		<Layout>
			<div className="container mx-1 px-5 pb-10 md:pt-20  pt-20">
				<p title className="p-5xlx ml-2 font-semibold ">
					Contactez nous
				</p>

				<div className="flex flex-wrap mt-8 justify-between">
					<div className="md:w-1/2 w-full md:pl-2">
						<p className="p-lg leading-relaxed">
							Pour toute question relative à ce projet, n'hésitez pas à nous
							contacter à l'adresse e-mail indiquée. Vous pouvez aussi nous
							écrire{" "}
							<a href="#" target="_blank" rel="oups">
								<u>
									<i>github discussions</i>
								</u>
							</a>
							.
						</p>
					</div>
					<div className="md:w-1/3 w-full">
						<p>Notre adresse mail</p>
						<p subtitle className="!font-light md:!p-3xl">
							abessolo.affadjene@gmail.com
						</p>
					</div>
				</div>
			</div>

			<div
				className={
					"dark:bg-slate-800 text-white/80 mt-10 container py-10 md:px-20 px-5 mb-20"
				}
			>
				<p subtitle className="md:p-5xl p-4xl !font-light">
					Travaillez avec nous . . .
				</p>
				<p className="!p-lg leading-relaxed mt-5 px-1">
					Nous sommes un groupe de 2 apprentis développeurs motivés, nous
					utilisons quelques framework Javascript pour ce projet. Si vous
					appréciez notre travail et voulez travailler ou nous contacter pour la
					mise en place d'un Web Développement, n'hésitez pas à nous contacter.
				</p>
			</div>
			<div className="w-full  flex justify-center items-center">
				<form action="" className="flex p-8 flex-col max-w-[500px] w-full">
					<div>
						<p className="inline border-b-4 border-slate-800 text-3xl font-semibold text-slate-800">
							Contact
						</p>
						<p className="my-5 text-lg">Laissez nous un message 😊!</p>
					</div>
					<input
						className="p-2 bg-slate-800 text-white rounded-sm"
						placeholder="Name"
					/>
					<input
						className="p-2 bg-slate-800 text-white my-4 rounded-sm"
						placeholder="E-mail"
					/>
					<textarea
						className="p-2 bg-slate-800 text-white rounded-sm"
						placeholder="Message"
						rows={5}
					></textarea>
					<button className="text-white bg-slate-800  hover:bg-neutral-200 hover:text-black my-4 rounded-sm px-4 mx-36">
						Envoyer
					</button>
				</form>
			</div>
		</Layout>
	);
}
