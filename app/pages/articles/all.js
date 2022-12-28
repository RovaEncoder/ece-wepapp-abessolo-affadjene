import { FaSistrix } from "react-icons/fa";
import Link from "next/link";
import { supabase } from "../../utils/supabase";
import Layout from "../../layout/layout";
import { useState } from "react";

export default function Articles({ arts }) {
	const [articles, setArticles] = useState(arts);

	function handleChange(event) {
		const term = event.target.value.toLowerCase();

		const articlesMatch = arts.filter(
			(a) =>
				a.body.toLowerCase().includes(term) ||
				a.description.toLowerCase().includes(term) ||
				a.title.includes(term)
		);

		setArticles(articlesMatch);
	}
	return (
		<Layout>
			<div className="pt-20">
				<div className=" mx-auto bg-gray-300 dark:bg-slate-900 w-full flex justify-center py-10 ">
					<div className="relative flex items-center max-w-sm w-full h-12 rounded-3xl bg-white focus-within:shadow-lg  overflow-hidden">
						<button className="grid place-items-center h-full w-12 text-gray-300 mr30 bg-white">
							<FaSistrix size={23} />
						</button>

						<input
							onChange={handleChange}
							className="peer h-full w-full outline-none bg-white text-black text-md
						 font-semibold pl-3"
							type="text"
							id="value"
							placeholder="Search something..."
						/>
					</div>
				</div>
				<div className="flex px-20 py-10 gap-16 md:flex-row md:flex-wrap bg-gray-300 dark:!bg-slate-900 ms:flex-col sm:flex-col min-w-[10%]:flex-col ">
					{articles.map((article) => (
						<div className="basis-1/4 shadow-lg px-10 pt-5  pb-16 rounded-sm my-5 dark:text-black flex-1 dark:bg-stone-300 hover:bg-slate-100 hover:scale-105 ease-in duration-300 ">
							<div className="">
								<div
									key={article.id}
									className=" text-center  flex flex-col justify-center pb-O items-center "
								>
									<img
										src={article.imageUrl}
										className="rounded-sm object-cover"
										width="100%"
										height="100%"
										layout="responsive"
									/>
									<p className="text-gray-89 py-1">{article.title}</p>
									<p className="text-gray-89 py-1 mb-2 text-justify text-lg font-medium max-w-2xl mx-auto">
										{article.description.slice(0, 80) + "..."}
									</p>
								</div>
							</div>
							<div className="w-full h-auto flex items-center justify-center">
								<button className="bg-slate-900 text-white dark:bg-white hover:text-black dark:hover:text-white hover:bg-white  dark:hover:bg-sky-500/10  dark:text-black font-semibold  p-2 rounded-md flex items-center justify-center hover:scale-105 ease-in duration-300 cursor-pointer shadow-lg shadow-black-10  mb-3  ">
									<Link href={`/articles/${article.id}#top`}>
										<small>Read more ...</small>
									</Link>
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</Layout>
	);
}

export async function getServerSideProps({ params }) {
	const { data: arts, error } = await supabase
		.from("articles")
		.select("*")
		.order("created_at", { ascending: false });

	if (error) {
		throw new Error(error);
	}

	return {
		props: {
			arts,
		},
	};
}
