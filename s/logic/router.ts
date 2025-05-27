
import {sub} from "@e280/stz"
import {ev} from "@benev/slate"

export class Router {
	onHash = sub<[string]>()

	constructor() {
		ev(window, {hashchange: () => {
			this.onHash.pub(this.route)
		}})
	}

	get route() {
		let hash = window.location.hash
			.replace(/^#/, "")

		return (hash === "/")
			? ""
			: hash
	}

	set route(path: string) {
		if (path === "")
			window.history.pushState(null, "", location.pathname)
		else
			window.history.pushState(null, "", "#" + path)
	}
}

