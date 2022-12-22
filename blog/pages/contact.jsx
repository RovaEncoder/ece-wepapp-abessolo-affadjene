import Layout from "../layout/layout";

export default function Contact() {
	return (
		<Layout>
			<div className="px-5 pb-10 md:pt-20">
				<div className="w-full flex justify-center items-center flex-col">
					<p title className="p-5xlx mt-10  font-semibold ">
						Contactez nous
					</p>
					<div
						className={
							"w-1/2 dark:bg-slate-800 text-white/80 mt-2 py-10 md:px-20 px-5 mb-10"
						}
					>
						<p subtitle className="md:p-5xl p-4xl !font-light">
							Travaillez avec nous . . .
						</p>
						<p className="!p-lg leading-relaxed  px-1">
							Nous sommes un groupe de 2 apprentis développeurs motivés, nous
							utilisons quelques framework Javascript pour ce projet. Si vous
							appréciez notre travail et voulez travailler ou nous contacter
							pour la mise en place d'un Web Développement, n'hésitez pas à nous
							contacter.
						</p>
					</div>
				</div>
			</div>
			<div className="w-full  flex justify-center items-center">
				<form action="" className="flex p-8 flex-col max-w-[500px] w-full">
					<div>
						<p className="inline border-b-4 border-slate-800 text-3xl font-semibold">
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
