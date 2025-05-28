
import {html, shadowView} from "@benev/slate"

import stylesCss from "./styles.css.js"
import themeCss from "../../theme.css.js"

import {ErrorSituation} from "../../../logic/parts/situation.js"

export const ErrorView = shadowView(use => (_situation: ErrorSituation) => {
	use.name("error")
	use.css(themeCss, stylesCss)

	return html`
		<h2>Error</h2>
		<p>Something's wrong with this link.</p>
		<p><a href="#/">Author a new link</a></p>
	`
})

