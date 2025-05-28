
import {signal} from "@benev/slate"

import {Router} from "./parts/router.js"
import {Timelink} from "./parts/timelink.js"
import {AuthorSituation, ErrorSituation, WitnessSituation} from "./parts/situation.js"

export class Context {
	router = new Router()
	situation = signal(Context.getSituation(this.router.route))

	constructor() {
		this.router.onChange(route => {
			this.situation.value = Context.getSituation(route)
		})
	}

	static getSituation(route: string) {
		const matchViewing = route.match(Timelink.regex)
		if (matchViewing) {
			const timelink = Timelink.fromUrl(location.href)
			return new WitnessSituation(timelink)
		}
		else if (route !== "")
			return new ErrorSituation()
		return new AuthorSituation()
	}
}

export const context = new Context()

