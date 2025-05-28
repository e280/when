
export function calculateCountdown(time: number) {
	const now = Date.now()
	const delta = time - now

	const abs = Math.abs(delta)
	const seconds = Math.floor(abs / 1000) % 60
	const minutes = Math.floor(abs / (1000 * 60)) % 60
	const hours = Math.floor(abs / (1000 * 60 * 60)) % 24
	const days = Math.floor(abs / (1000 * 60 * 60 * 24))

	const parts = []
	if (days) parts.push(`${days}d`)
	if (hours) parts.push(`${hours}h`)
	if (minutes) parts.push(`${minutes}m`)
	parts.push(`${seconds}s`)

	const str = parts.join(" ")
	return delta < 0 ? `${str} ago` : `in ${str}`
}

