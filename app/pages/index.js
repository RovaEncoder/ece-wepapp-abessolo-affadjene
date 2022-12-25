import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../layout/layout";
import connaissance from "../public/images/connaissance.png";
import { supabase } from "../utils/supabase";

export default function Home({ articles }) {
	return (
		<>
			<Head>
				<title>Blog</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<div className="w-full h-full dark:bg-slate-900 pt-20 ">
					<div className="w-full h-full text-start text-white ">
						<div className=" w-full mx-auto h-5/6 flex justify-start bg-slate-900 ">
							<div className="w-1/2 bg-gray-300  dark:bg-slate-900 p-10  border-white py-15">
								<h1 className="font-semibold mt-8 text-black dark:text-white">
									Vous voulez partager
								</h1>
								<h1 className="font-semibold text-black dark:text-white">
									un article
								</h1>
								<p className="my-2 text-lg mt-8 text-black dark:text-white">
									Bonjour, nous sommes Abessolo et Affadjene, <br /> étudiants à
									l'ECE-Paris, nous vous donnons l'oprotunité <br />
									de rediger votre article et de le publiez ! 😊
								</p>
								<h3 className="my-5 dark:text-white text-red-500">
									Le partage est l'un des principes les plus forts
								</h3>
								<button className="bg-slate-800 dark:bg-white dark:hover:bg-sky-500/10 hover:bg-white  hover:text-black mt-7 text:white dark:text-black  font-semibold  p-2 rounded-md flex items-center justify-center hover:scale-105 ease-in duration-300 cursor-pointer shadow-lg shadow-black-10  mb-2 ">
									{/* link to the login page */}
									<Link href="/login">
										<small>Rediger...</small>
									</Link>
								</button>
							</div>
							<div className="flex flex-col p-12 w-1/2  items-center bg-gray-300 dark:bg-slate-900">
								<p className="mt-8 dark:text-white text-black">
									Partagez votre connaissance
								</p>

								<div>
									<Image
										className="rounded-xl shadow-xl shadow-black-500"
										src={connaissance}
										width="800"
										height="500"
										alt="connaisance"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full flex items-center justify-center text-4xl font-semibold bg-gray-200 dark:!bg-slate-800 dark:text-white text:black pt-20">
						<p>Articles les plus recents : </p>
					</div>
					<div className="flex px-20 py-10 gap-16 md:flex-row md:flex-wrap bg-gray-200 dark:!bg-slate-800 ms:flex-col sm:flex-col min-w-[10%]:flex-col ">
						{articles.map((article) => (
							<div
								key={article.id}
								className="basis-1/4 shadow-lg px-10 pt-5  pb-16 rounded-sm my-5 dark:!bg-slate-700 bg-gray-300  flex-1 text-black dark:text-white"
							>
								<div className="flex-col gap-10 lg:flex-row lg:flex-wrap   h-full">
									<div className=" text-center  flex flex-col justify-center pb-O items-center ">
										<img
											src={article.imageUrl}
											className="rounded-sm object-cover"
											width="100%"
											height="100%"
											layout="responsive"
										/>
										{/* <p className="py-1">
											Auteur:{" "}
											<span className="text-lg font-medium text-teal-600 py-1">
												{article.author}
											</span>
										</p> */}
										<p className="text-gray-89 py-1">{article.title}</p>
										<p className="text-gray-89 py-1 mb-2 text-justify text-lg font-medium max-w-2xl mx-auto">
											{article.body.slice(0, 30) + " ....."}
										</p>
									</div>
								</div>
								<div className="w-full h-auto flex items-center justify-center">
									<button className=" bg-slate-900 text-white dark:bg-white hover:text-black dark:hover:text-white hover:bg-white  dark:hover:bg-sky-500/10  dark:text-black font-semibold  p-2 rounded-md flex items-center justify-center hover:scale-105 ease-in duration-300 cursor-pointer shadow-lg shadow-black-10  mb-3 ">
										<Link scroll={true} href={`/articles/${article.id}#top`}>
											<small>Read more ...</small>
										</Link>
									</button>
								</div>
							</div>
						))}
					</div>
					<div className="flex items-center justify-center bg-gray-200 dark:bg-slate-800 text-xl text-black dark:text-white pb-10">
						<p className=" text-lg">
							Allez à la page{"  "}
							<span className="cursor-pointer font-bold text-red-500 dark:text-yellow-300">
								<Link href="/articles/all">articles</Link>
							</span>
							{"  "}pour plus de contenu
						</p>
					</div>
				</div>
			</Layout>
		</>
	);
}

export async function getStaticProps() {
	const { data: articles, error } = await supabase
		.from("articles")
		.select("*")
		.order("created_at", { ascending: false })
		.limit(3);

	if (error) {
		throw new Error(error);
	}

	return {
		props: {
			articles,
		},
	};
}
