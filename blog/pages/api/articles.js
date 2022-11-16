export default function handler(req, res) {
	res.status(200).json([
		{
			source: {
				id: "reuters",
				name: "Reuters",
			},
			author: null,
			title:
				"Republican senators win re-election in initial U.S. midterm results - Reuters",
			description:
				"Several Republican senators easily won re-election on Tuesday in U.S. midterm elections that could usher in an era of divided government and scale back President Joe Biden's power in Washington.",
			url: "https://www.reuters.com/world/us/control-congress-bidens-power-ballot-us-midterms-2022-11-08/",
			urlToImage:
				"https://www.reuters.com/resizer/VDZP5O4E9myFjcyFHskA_zNUZDg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/LQC5XZPP2JLLTMC4GPSJ6QBYHM.jpg",
			publishedAt: "2022-11-09T00:30:00Z",
			content:
				"ALPHARETTA, Ga./PHOENIX, Ariz., Nov 8 (Reuters) - Several Republican senators easily won re-election on Tuesday in U.S. midterm elections that could usher in an era of divided government and scale ba… [+6216 chars]",
		},
		{
			source: {
				id: "usa-today",
				name: "USA Today",
			},
			author: "John Bacon and Jorge L. Ortiz, USA TODAY",
			title:
				"Russian fighters mock 'great generals' after suffering heavy losses; Zelenskyy cracks open a door to peace talks: Ukraine live updates - USA TODAY",
			description:
				'Russia\'s Defense Ministry downplayed complaints from troops of being sent into an "incomprehensible offensive" that resulted in many deaths. Updates.',
			url: "https://www.usatoday.com/story/news/world/2022/11/08/ukraine-russia-war-updates/8300182001/",
			urlToImage:
				"https://www.gannett-cdn.com/presto/2022/11/08/USAT/2b585bec-281f-4fc4-8ba0-7fd42107e88d-AP_APTOPIX_Russia_Ukraine_War_4.jpg?auto=webp&crop=7560,4253,x0,y384&format=pjpg&width=1200",
			publishedAt: "2022-11-09T00:22:30Z",
			content:
				"Russia's Defense Ministry is downplaying claims made in an open letter apparently from members of the 155th marine brigade of Russia's Pacific Fleet saying they had been sent into an \"incomprehensibl… [+6666 chars]",
		},

		{
			source: {
				id: "cnn",
				name: "CNN",
			},
			author: "Aya Elamroussi, Dakin Andone",
			title:
				"A single winning ticket for the $2.04 billion Powerball jackpot was sold in California - CNN",
			description:
				"Officials have finally announced the winning numbers for the record $2.04 billion Powerball lottery jackpot after Monday night's drawing was delayed when one of the 48 participating lotteries needed more time to complete the necessary protocols. The winning n…",
			url: "https://www.cnn.com/2022/11/08/us/powerball-lottery-record-delayed-drawing-tuesday-trnd/index.html",
			urlToImage:
				"https://media.cnn.com/api/v1/images/stellar/prod/221103101341-powerball.jpg?c=16x9&q=w_800,c_fill",
			publishedAt: "2022-11-08T23:54:00Z",
			content:
				"A lone winning ticket for the record $2.04 billion Powerball lottery jackpot was sold in Altadena, California, lottery officials said Tuesday, making the lucky ticket holder the winner of the largest… [+5003 chars]",
		},
	]);
}
