import { FaSistrix } from "react-icons/fa";
import { useState } from "react";

export default function Article({ articles }) {
	return (
		<div className="pt-20">
			<div class=" mx-auto bg-slate-900 w-full flex justify-center py-10 ">
				<div class="relative flex items-center max-w-sm w-full h-12 rounded-3xl focus-within:shadow-lg  overflow-hidden">
					<button class="grid place-items-center h-full w-12 text-gray-300 bg-white">
						<FaSistrix size={23} />
					</button>

					<input
						class="peer h-full w-full outline-none bg-white text-black text-md
						 font-semibold pl-3"
						type="text"
						id="value"
						placeholder="Search something..."
					/>
				</div>
			</div>
			{/* <div className="w-full flex items-center justify-center pt-10 bg-slate-900 ">
				<div className="w-1/4  flex items-center bg-white rounded-3xl px-5">
					<button className="bg-white mx-2">
						<FaSistrix className="text-wite  bg-black" size={28} />
					</button>
					<input
						className="p-1 w-full text-white my-4 border bg-black rounded-sm"
						placeholder="E-mail"
					></input>
				</div>
			</div> */}
			<div className="flex px-20 py-10 gap-16 md:flex-row md:flex-wrap !bg-slate-900 ms:flex-col sm:flex-col min-w-[10%]:flex-col ">
				{articles.map((article) => (
					<div className="basis-1/4 shadow-lg px-10 pt-5  pb-8 rounded-sm my-5  flex-1 bg-stone-300 hover:bg-slate-100 hover:scale-105 ease-in duration-300 ">
						<div className="flex-col gap-10 lg:flex-row lg:flex-wrap   h-full">
							<div
								key={article.id}
								className=" text-center  flex flex-col justify-center pb-O items-center "
							>
								<img
									src={article.urlToImage}
									className="rounded-sm object-cover"
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
							</div>
						</div>
						<div className="w-full h-auto flex items-center justify-center mb-2">
							<button class="bg-sky-500 hover:bg-sky-500/50 text-white  p-0.5 rounded-sm flex items-center justify-center hover:scale-105 ease-in duration-300 cursor-pointer shadow-lg shadow-black-10  mb-2 ">
								<a href={article.url}>
									<small>Read more ...</small>
								</a>
							</button>
						</div>
					</div>
				))}
			</div>
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

// ≥≥
// function SearchBar({ articles }) {
// 	var search = document.getElementById(value);
// 	articles.filter(articles.include(search));
// }

// Document.addEventListener("DOMContentLoaded", articles);
// Autre methode: ustiliser fonction Search() puis prendre le resultat et afficher tous les elements avec resultat true
