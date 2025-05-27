
import {signal} from "@benev/slate"
import {Base58, Txt} from "@e280/stz"

import {Router} from "./parts/router.js"
import {Timelink} from "./parts/timelink.js"
import {AuthoringSituation, ErroringSituation, ViewingSituation} from "./parts/situation.js"

export class Context {
	router = new Router()
	situation = signal(Context.getSituation(this.router.route))

	constructor() {
		this.router.onChange(route => {
			this.situation.value = Context.getSituation(route)
		})

		const link = new Timelink(Date.now(), `lmao`).toUrl()
		const timelink = Timelink.fromUrl(link)
		console.log(timelink)
	}

	static getSituation(route: string) {
		const matchViewing = route.match(Timelink.regex)
		if (matchViewing) {
			const [_whole, time, label] = matchViewing
			return new ViewingSituation(
				Number(time),
				label && Txt.string(Base58.bytes(label)),
			)
		}
		else if (route !== "")
			return new ErroringSituation()
		return new AuthoringSituation()
	}
}

export const context = new Context()

