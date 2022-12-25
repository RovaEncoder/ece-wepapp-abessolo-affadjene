import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo4.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useTheme } from "next-themes";
import {
	FaGithub,
	FaLinkedin,
	FaSun,
	FaMoon,
	FaAt,
	FaMobileAlt,
} from "react-icons/fa";
import { useUser } from "@supabase/auth-helpers-react";

//darkmode function
const changeTheme = () => {
	const { systemTheme, theme, setTheme } = useTheme();
	const currentTheme = theme === "system" ? systemTheme : theme;
	if (currentTheme === "dark") {
		return (
			<>
				<button
					className="flex justify-center items-center flex-col"
					onClick={() => setTheme("light")}
				>
					<FaSun size={20} />
					<p>Dark</p>
				</button>
			</>
		);
	} else {
		return (
			<>
				<button
					className="flex justify-center items-center flex-col"
					onClick={() => setTheme("dark")}
				>
					<FaMoon size={20} />
					<p>Light</p>
				</button>
			</>
		);
	}
};

export default function Navbar() {
	const [navbar, setNavbar] = useState(false);
	const [darkMode, setDarktMode] = useState(false);
	const currentUser = useUser();
	const handleNav = () => {
		setNavbar(!navbar);
	};

	return (
		<div id="top" className="w-full h-20 drop-shadow-md z-[100]">
			<div className="flex w-full h-full pl-5 pr-10 2xl:px-16 dark:!bg-slate-900 bg-white  text-black dark:!text-white items-center justify-between">
				<Link href="/">
					<Image src={logo} width={90} height={50} />
				</Link>
				{changeTheme()}
				<div className="flex justify-center items-center">
					<ul className="hidden md:flex text-md font-semibold ">
						<Link href="/">
							<li className="ml-10  uppercase  hover:border-b-4 dark:hover:border-white hover:border-black  cursor-pointer">
								Accueil
							</li>
						</Link>
						<Link href="/about">
							<li className="ml-10 uppercase hover:border-b-4 dark:hover:border-white hover:border-black  cursor-pointer">
								A propos
							</li>
						</Link>
						<Link href="/articles/all">
							<li className="ml-10 uppercase hover:border-b-4 dark:hover:border-white hover:border-black  cursor-pointer">
								Articles
							</li>
						</Link>
						<Link href="/contact">
							<li className="ml-10 uppercase hover:border-b-4 dark:hover:border-white hover:border-black  cursor-pointer">
								Contact
							</li>
						</Link>
						{!currentUser ? (
							<Link href="/login">
								<li className="ml-10 uppercase hover:border-b-4 dark:hover:border-white hover:border-black 2 cursor-pointer">
									Se connecter
								</li>
							</Link>
						) : (
							<Link href="/profile">
								<li className="ml-10 uppercase hover:border-b-4 dark:hover:border-white hover:border-black  cursor-pointer">
									Mon profile
								</li>
							</Link>
						)}
					</ul>
					<div className="md:hidden transition md:ease-in" onClick={handleNav}>
						<AiOutlineMenu size={30} />
					</div>
				</div>
			</div>

			<div
				className={
					navbar
						? " md:hidden fixed left-0 top-0 w-full h-screen  bg-black/70"
						: ""
				}
			>
				<div
					className={
						navbar
							? " md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500"
							: "fixed left-[-100%] top-0 p-10 ease-in duration-500"
					}
				>
					<div>
						<div className="flex w-full items-center justify-between">
							<Image src={logo} width={130} height={60} />
							<div
								className="rounded-full shadow-lg shadow-black-100 p-3 cursor-pointer hover:bg-slate-100 transition duration-500 ease-out"
								onClick={handleNav}
							>
								<AiOutlineClose />
							</div>
						</div>
						<div className="flex mt-5 "></div>
						<div className="py-20 flex flex-col">
							<ul className="uppercase font-semibold ">
								<Link href="/">
									<li className=" text-sm cursor-pointer py-4">Acueil</li>
								</Link>
								<Link href="/about">
									<li className="text-sm cursor-pointer py-4 ">A propos</li>
								</Link>
								<Link href="/articles">
									<li className=" text-sm cursor-pointer py-4">Articles</li>
								</Link>
								<Link href="/contact">
									<li className=" text-sm cursor-pointer py-4">Contact</li>
								</Link>
							</ul>
						</div>
					</div>

					<div className=" bg-gray-200 w-full h-60 ">
						<p className="mt-2 ">Me contacter</p>
						<div className=" flex items-center justify-between mt-4 p-2 gap-2 ">
							<div className="rounded-full shadow-lg shadow-black-100 p-3 cursor-pointer hover:bg-slate-100">
								<Link href="https://www.linkedin.com/in/christ-rova-abessolo-903aa1244/">
									<FaLinkedin size={20} />
								</Link>
							</div>
							<div className="rounded-full shadow-lg shadow-black-100 p-3 cursor-pointer hover:bg-slate-100">
								<Link href="abessolochrist30@gmail.com">
									<FaAt size={20} />
								</Link>
							</div>
							<div className="rounded-full shadow-lg shadow-black-100 p-3 cursor-pointer hover:bg-slate-100">
								<Link href="https://github.com/RovaEncoder">
									<FaGithub size={20} />
								</Link>
							</div>
							<div className="rounded-full shadow-lg shadow-black-100 p-3 cursor-pointer hover:bg-slate-100">
								<Link href="+33605549892">
									<FaMobileAlt size={20} />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
