export default function formateDate(myDate) {
	const date = new Date(myDate);
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const year = date.getFullYear();
	const hour = date.getHours();
	const minutes = date.getMinutes();
	const createdDate =
		month + "/" + day + "/" + year + " - " + hour + ":" + minutes;

	return createdDate;
}
