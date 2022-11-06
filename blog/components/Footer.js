import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaAt, FaMobileAlt } from "react-icons/fa";

export default function Footer() {
	return (
		<div className="flex flex-col w-full h-60 justify-center items-center drop-shadow-md bg-sky-900 shadow-2xl mt-[750px]">
			<p className="font-semibold text-white uppercase mt-10 text-lg">
				Me contacter
			</p>
			<div class="flex items-center w-80 justify-between mt-7 max-w[330px] m-auto py-2">
				<div className="rounded-full shadow-lg shadow-black-100 p-3 bg-sky-800 cursor-pointer hover:bg-slate-100 hover:scale-110 ease-in duration-300">
					<Link href="https://www.linkedin.com/in/christ-rova-abessolo-903aa1244/">
						<FaLinkedin size={35} />
					</Link>
				</div>
				<div className="rounded-full shadow-lg shadow-black-100 p-3  bg-sky-800  cursor-pointer hover:bg-slate-100 hover:scale-110 ease-in duration-300">
					<Link href="abessolochrist30@gmail.com">
						<FaAt size={35} />
					</Link>
				</div>
				<div className="rounded-full shadow-lg shadow-black-100 p-3  bg-sky-800 cursor-pointer hover:bg-slate-100 hover:scale-110 ease-in duration-300">
					<Link href="https://github.com/RovaEncoder">
						<FaGithub size={35} />
					</Link>
				</div>
				<div className="rounded-full shadow-lg shadow-black-100 p-3  bg-sky-800 cursor-pointer hover:bg-slate-100 hover:scale-110 ease-in duration-300">
					<Link href="+33605549892">
						<FaMobileAlt size={35} />
					</Link>
				</div>
			</div>
		</div>
	);
}
