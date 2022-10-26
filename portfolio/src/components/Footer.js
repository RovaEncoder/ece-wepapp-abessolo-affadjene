import React from "react";
import Link from "next/link";
import { FaGithubt, FaLinkedin, FaAt, FaMobileAlt } from "react-icons/fa";

const Footer = () => {
	<footer>
		<h3>Me contacter</h3>
		<div class="contact">
			<div>
				<Link href="https://www.linkedin.com/in/christ-rova-abessolo-903aa1244/">
					<FaLinkedin />
				</Link>
			</div>
			<div>
				<Link href="abessolochrist30@gmail.com">
					<FaAt />
				</Link>
			</div>
			<div>
				<Link href="https://github.com/RovaEncoder">
					<FaGithubt />
				</Link>
			</div>
			<div>
				<Link href="+33605549892">
					<FaMobileAlt />
				</Link>
			</div>
		</div>
	</footer>;
};

export default Footer;
