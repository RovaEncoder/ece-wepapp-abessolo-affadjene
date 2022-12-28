/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false, //ToChangeMayBe
	swcMinify: true,
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "www.reuters.com",
				port: "3000",
				pathname: "http://localhost:3000/api/db",
			},
		],
	},
};

module.exports = nextConfig;
