
export function getUniversalTime(time: number) {
	const date = new Date(time)
	const year = date.getUTCFullYear()
	const month = date.getUTCMonth()
	const day = date.getUTCDate()
	const weekday = date.getUTCDay()
	const hour = date.getUTCHours()
	const hour12 = hour % 12 || 12
	const ampm = hour >= 12 ? "pm" : "am"
	const minute = date.getUTCMinutes()
	return {
		date, year, month, day,
		weekday, hour, hour12, ampm, minute,
		...niceTimes({weekday, day, month, hour, minute}),
	}
}

export function getLocalTime(time: number): ReturnType<typeof getUniversalTime> {
	const date = new Date(time)
	const year = date.getFullYear()
	const month = date.getMonth()
	const day = date.getDate()
	const weekday = date.getDay()
	const hour = date.getHours()
	const hour12 = hour % 12 || 12
	const ampm = hour >= 12 ? "pm" : "am"
	const minute = date.getMinutes()
	return {
		date, year, month, day, weekday,
		hour, hour12, ampm, minute,
		...niceTimes({weekday, day, month, hour, minute}),
	}
}

export function getLocalTimezone() {
	const date = new Date()

	const long = require(
		Intl.DateTimeFormat("en-US", {timeZoneName: "long"})
			.formatToParts(date)
			.find(part => part.type === "timeZoneName")?.value
	)

	const short = require(
		Intl.DateTimeFormat("en-US", {timeZoneName: "short"})
			.formatToParts(date)
			.find(part => part.type === "timeZoneName")?.value
	)

	const offsetTime = date.getTimezoneOffset() / 60
	const offsetSign = offsetTime < 0 ? "+" : "-"
	const offset = "UTC" + offsetSign + offsetTime

	return {long, short, offset}
}

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

function require(s: string | undefined) {
	if (s === undefined) throw new Error("time keeping error that isn't supposed to happen")
	return s
}

function niceTimes({
		weekday, day, month, hour, minute,
	}: {
		weekday: number
		day: number
		month: number
		hour: number
		minute: number
	}) {


	return {
		weekdayName: require(weekdayNames.at(weekday)),
		monthName: require(monthNames.at(month)),
		dayPad: day.toString().padStart(2, "0"),
		monthPad: (month + 1).toString().padStart(2, "0"),
		hourPad: hour.toString().padStart(2, "0"),
		minutePad: minute.toString().padStart(2, "0"),
	}
}

const weekdayNames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
]

const monthNames = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
]

