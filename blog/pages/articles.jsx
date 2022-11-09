import Image from "next/image";

export default function Article({ articles }) {
	return (
		<div className="flex px-16 py-10 gap-10 md:flex-row md:flex-wrap bg-slate-900 ms:flex sm:flex-col min-w-[10%]:flex-col ">
			{articles.map(article => (
				<div className="basis-1/4 shadow-lg px-10 pt-10  pb-0 rounded-lg my-5  flex-1 bg-slate-100 hover:bg-slate-100 hover:scale-10 ease-in duration-300 ">
					<div className="flex-col   gap-10 lg:flex-row lg:flex-wrap">
						<div
							key={article.id}
							className=" text-center flex flex-col justify-center pb-5 items-center h-full"
						>
							<img
								src={article.urlToImage}
								className="rounded-lg object-cover"
								width="100%"
								height="100%"
								layout="responsive"
							/>
							<p className="py-1">
								Source:{" "}
								<span className="text-lg font-medium text-teal-600 py-1">
									{article.source.name}
								</span>
							</p>
							<p className="text-gray-89 py-1">{article.title}</p>
							<p className="text-gray-89 py-1 mb-2 text-justify text-lg font-medium max-w-2xl mx-auto">
								{article.description}
							</p>
							<button class="bg-sky-500 hover:bg-sky-500/50 text-white font-semibold  px-1 rounded flex items-center justify-center hover:scale-105 ease-in duration-300 cursor-pointer shadow-lg shadow-black-10 mt-2 mb-0 ">
								<a href={article.url}>
									<small>Read more</small>
								</a>
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export async function getStaticProps() {

	const res = await fetch("http://localhost:3000/api/db");
	const articles = await res.json();

	return {
		props: { articles },
	};
}
