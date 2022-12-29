import Layout from "../layout/layout";

export default function Contact() {
	return (
		<Layout>
			<div className="px-5 md:pt-20 ">
				<div className="w-full flex justify-center items-center flex-col">
					<p title className="p-5xlx mt-10  dark:text-white font-semibold ">
						Contactez nous
					</p>
					<div
						className={
							"w-1/2 dark:bg-white/80 bg-gray-300  text-black mt-2 py-10 md:px-20 px-5 mb-10"
						}
					>
						<p subtitle className="md:p-5xl p-4xl  dark:text-white!font-light">
							Travaillez avec nous . . .
						</p>
						<p className="!p-lg leading-relaxed   px-1">
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
						<p className="inline  border-b-4 dark:text-white dark:border-white border-black text-3xl font-semibold">
							Contact
						</p>
						<p className="my-5 text-lg dark:text-white">
							Laissez nous un message 😊!
						</p>
					</div>
					<input
						className="p-2   dark:bg-white/80  bg-gray-300 dark:text-white rounded-sm"
						placeholder="Name"
					/>
					<input
						className="p-2    dark:bg-white/80  bg-gray-300 dark:text-black my-4 rounded-sm"
						placeholder="E-mail"
					/>
					<textarea
						className="p-2   dark:bg-white/80 bg-gray-300 dark:text-black rounded-sm"
						placeholder="Message"
						rows={5}
					></textarea>
					<button className=" dark:bg-white/80 bg-gray-300 dark:text-black  hover:bg-neutral-200 hover:text-black my-4 rounded-sm px-4 mx-36">
						Envoye
					</button>
				</form>
			</div>
		</Layout>
	);
}
