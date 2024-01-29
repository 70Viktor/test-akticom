export default function getFormattedDate(stringDate: string): string {
	const date = new Date(stringDate)
	let dd = String(date.getDate())
	let mm = String(date.getUTCMonth() + 1)
	let yy = String(date.getFullYear())

	if (dd.length < 2) dd = '0' + dd
	if (mm.length < 2) mm = '0' + mm
	yy = yy.substring(2)

	return [dd, mm, yy].join('/')
}
