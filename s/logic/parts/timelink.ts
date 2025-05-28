
import {Txt} from "@e280/stz"
import {Router} from "./router.js"
import {constants} from "../../constants.js"
import {Codecs} from "../../tools/codecs.js"

export class Timelink {
	static regex = /^\/([a-z0-9]+)(?:|\/([a-z0-9]*))$/i

	static fromRoute(route: string) {
		const match = route.match(this.regex)
		if (!match) throw new Error("invalid route for timelink parsing")
		const [, timeEncoded, textEncoded] = match
		const time = decodeTime(timeEncoded)
		const text = decodeText(textEncoded)
		return new this(time, text)
	}

	static fromUrl(url: string | URL) {
		const {hash} = new URL(url)
		return this.fromRoute(Router.hashToRoute(hash))
	}
	
	constructor(
			public time: number,
			public text: string,
		) {
		this.text = this.text.slice(0, constants.textLimit)
	}

	toRoute() {
		return this.text
			? `/${encodeTime(this.time)}/${encodeText(this.text)}`
			: `/${encodeTime(this.time)}`
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
	return Codecs.base62.fromInteger(seconds)
}

function decodeTime(text: string) {
	const seconds = Codecs.base62.toInteger(text)
	return seconds * 1000
}

function encodeText(md: string) {
	if (!md) return ""
	const bytes = Txt.toBytes(md)
	return Codecs.base62.fromBytes(bytes)
}

function decodeText(b58: string) {
	if (!b58) return ""
	const bytes = Codecs.base62.toBytes(b58)
	return Txt.fromBytes(bytes)
}

