
import {html, shadowComponent} from "@benev/slate"

import themeCss from "../theme.css.js"
import stylesCss from "./styles.css.js"

import {context} from "../../logic/context.js"
import {AuthorView} from "../pages/author/view.js"
import {ErrorSituation, WitnessSituation} from "../../logic/parts/situation.js"

export const WhenstApp = shadowComponent(use => {
	use.styles(themeCss, stylesCss)
	const situation = context.situation.value

	const sitch = (
		(situation instanceof ErrorSituation) ?
			"erroring" :
		(situation instanceof WitnessSituation) ?
			"viewing" :
			AuthorView([situation])
	)

	return html`
		${sitch}
	`
})

