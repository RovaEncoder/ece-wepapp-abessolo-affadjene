export default function formateDate(myDate) {
	const date = new Date(myDate);
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const year = date.getFullYear();
	const hour = date.getHours();
	const minutes = date.getMinutes();

	const hourToShow = hour.toString().length === 1 ? "0" + hour : hour;
	let monthWord = "";
	switch (month) {
		case 1:
			monthWord = "Janvier";
		case 2:
			monthWord = "Février";
		case 3:
			monthWord = "Mars";
		case 4:
			monthWord = "Avril";
		case 5:
			monthWord = "Mars";
		case 6:
			monthWord = "Juin";
		case 7:
			monthWord = "Juillet";
		case 8:
			monthWord = "Aout";
		case 9:
			monthWord = "Septembre";
		case 10:
			monthWord = "Octobre";
		case 11:
			monthWord = "Novembre";
		case 12:
			monthWord = "Décembre";
	}
	const createdDate =
		day + " " + monthWord + " " + year + " à " + hourToShow + ":" + minutes;

	return createdDate;
}
