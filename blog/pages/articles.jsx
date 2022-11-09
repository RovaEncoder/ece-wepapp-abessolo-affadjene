import Image from "next/image";

export default function Article({ articles }) {
	return (
		<div className="py-10 gap-10 lg:flex-row lg:flex-wrap ">
			{articles.map(article => (
				<div className="basis-1/3 shadow-lg p-10 rounded-xl my-5  flex-1">
					<div className="flex-col py-10 gap-10 lg:flex-row lg:flex-wrap">
						<div
							key={article.id}
							className=" text-center flex flex-col justify-center items-center"
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
							<p className="text-gray-89 py-1 text-justify text-xl font-medium max-w-2xl mx-auto">
								{article.description}
							</p>
							<button class="bg-sky-500 hover:bg-sky-500/50 text-white font-semibold  px-1 rounded flex items-center justify-center hover:scale-105 ease-in duration-300 cursor-pointer shadow-lg shadow-black-10 mt-2 ">
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
