import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaAt, FaMobileAlt } from "react-icons/fa";

export default function Footer() {
	return (
		<div className="flex flex-col w-full h-55 justify-center items-center drop-shadow-md bg-white dark:bg-slate-900 shadow-2xl footer-fix">
			<p className="font-semibold text-black dark:text-white uppercase mt-5 text-lg">
				Nous contacter
			</p>
			<div className="flex items-center w-90 justify-between mt-4 max-w[330px] m-auto py-2 gap-7">
				<div className="rounded-full shadow-lg shadow-black-100 p-3 bg-gray-300 dark:bg-slate-700  cursor-pointer hover:bg-slate-100 dark:hover:bg-white  hover:scale-110 ease-in duration-300">
					<Link href="https://www.linkedin.com/in/christ-rova-abessolo-903aa1244/">
						<FaLinkedin size={30} />
					</Link>
				</div>
				<div className="rounded-full shadow-lg shadow-black-100 p-3 bg-gray-300 dark:bg-slate-700  cursor-pointer hover:bg-slate-100 dark:hover:bg-white hover:scale-110 ease-in duration-300">
					<Link href="mailto:abessolochrist30@gmail.com">
						<FaAt size={30} />
					</Link>
				</div>
				<div className="rounded-full shadow-lg shadow-black-100 p-3 bg-gray-300 dark:bg-slate-700 cursor-pointer hover:bg-slate-100 dark:hover:bg-white  hover:scale-110 ease-in duration-300">
					<Link href="https://github.com/RovaEncoder">
						<FaGithub size={30} />
					</Link>
				</div>
				<div className="rounded-full shadow-lg shadow-black-100 p-3 bg-gray-300 dark:bg-slate-700 cursor-pointer hover:bg-slate-100 dark:hover:bg-white hover:scale-110 ease-in duration-300">
					<Link href="callto:+33605549892">
						<FaMobileAlt size={30} />
					</Link>
				</div>
			</div>
			<p className="font-semibold dark:text-white/80 text-black mb-5">
				<small>Made with ❤️</small>
			</p>
		</div>
	);
}
