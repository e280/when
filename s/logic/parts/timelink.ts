
import {Router} from "./router.js"
import {Base58, Txt} from "@e280/stz"

export class Timelink {
	static regex = /^\/([a-z0-9]+)\/([a-z0-9]*)$/i

	static fromRoute(route: string) {
		const match = route.match(this.regex)
		if (!match) throw new Error("invalid route for timelink parsing")
		const [, timeEncoded, markdownEncoded] = match
		const time = decodeTime(timeEncoded)
		const md = decodeMd(markdownEncoded)
		return new this(time, md)
	}

	static fromUrl(url: string | URL) {
		const {hash} = new URL(url)
		return this.fromRoute(Router.hashToRoute(hash))
	}
	
	constructor(
		public time: number,
		public md: string,
	) {}

	toRoute() {
		return `/${encodeTime(this.time)}/${encodeMd(this.md)}`
	}

	toUrl() {
		const {origin, pathname, search} = location
		const hash = this.toRoute()
		return `${origin}${pathname}${search}#${hash}`
	}
}

////////////////////////

function encodeTime(time: number) {
	const seconds = Math.floor(time / 1000)
	return seconds.toString(32)
}

function decodeTime(text: string) {
	const seconds = parseInt(text, 32)
	return seconds * 1000
}

function encodeMd(md: string) {
	if (!md) return ""
	const bytes = Txt.bytes(md)
	return Base58.string(bytes)
}

function decodeMd(b58: string) {
	if (!b58) return ""
	const bytes = Base58.bytes(b58)
	return Txt.string(bytes)
}

