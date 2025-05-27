
import {sub} from "@e280/stz"
import {ev} from "@benev/slate"

export class Router {
	onChange = sub<[string]>()

	constructor() {
		ev(window, {hashchange: () => {
			this.#cleanup()
			this.onChange.pub(this.route)
		}})
	}

	get route() {
		return Router.hashToRoute(location.hash)
	}

	set route(path: string) {
		if (path === "")
			window.history.pushState(null, "", location.pathname)
		else
			window.history.pushState(null, "", "#" + path)
	}

	#cleanup() {
		if (location.hash === "#" || location.hash === "#/")
			window.history.replaceState(null, "", location.pathname)
	}

	static hashToRoute(hash: string) {
		hash = hash.replace(/^#/, "")
		return (hash === "/")
			? ""
			: hash
	}
}

