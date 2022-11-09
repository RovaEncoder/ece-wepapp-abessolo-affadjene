export default function Contact() {
	return (
		<>
			<section className="container mx-1 px-5 pb-10 md:pt-20 pt-[80px]">
				<p title className="p-5xlx ml-2 font-semibold ">
					Contactez nous
				</p>

				<div className="flex flex-wrap mt-8 justify-between">
					<div className="md:w-1/2 w-full md:pl-2">
						<p className="p-lg leading-relaxed">
							Pour toute question relative à ce projet, n'hésitez pas à
							nous contacter à l'adresse e-mail indiquée. Vous pouvez aussi nous
							écrire{" "}
							<a
								href="#"
								target="_blank"
								rel="oups"
							>
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
			</section>

			<section
				className={
					"dark:bg-slate-800 text-white/80 mt-10 container py-10 md:px-20 px-5 mb-20"
				}
			>
				<p subtitle className="md:p-5xl p-4xl !font-light">
					Travaillez avec nous . . .
				</p>
				<p className="!p-lg leading-relaxed mt-5 px-1">
					Nous sommes un groupe de 2 apprentis développeurs, nous utilisons
					quelques framework Javascript pour ce projet. Si vous appréciez notre travail et
					voulez travaillez ou nous contacter pour la mise en place d'un Web
					Développement, n'hésitez pas à nous contacter.
				</p>
			</section>
		</>
	);
}
