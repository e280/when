
export function calculateCountdown(time: number) {
	const now = Date.now()
	const delta = time - now

	const abs = Math.abs(delta)
	const seconds = Math.floor(abs / 1000) % 60
	const minutes = Math.floor(abs / (1000 * 60)) % 60
	const hours = Math.floor(abs / (1000 * 60 * 60)) % 24
	const days = Math.floor(abs / (1000 * 60 * 60 * 24))

	const parts = []
	if (days) parts.push(`${days} day${days !== 1 ? 's' : ''}`)
	if (hours) parts.push(`${hours} hour${hours !== 1 ? 's' : ''}`)
	if (minutes) parts.push(`${minutes} minute${minutes !== 1 ? 's' : ''}`)
	parts.push(`${seconds} second${seconds !== 1 ? 's' : ''}`)

	const str = parts.join(", ")
	return delta < 0 ? `${str} ago` : `in ${str}`
}

