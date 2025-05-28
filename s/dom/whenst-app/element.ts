
import {shadowComponent} from "@benev/slate"

import themeCss from "../theme.css.js"
import stylesCss from "./styles.css.js"

import {context} from "../../logic/context.js"
import {ErrorView} from "../pages/error/view.js"
import {AuthorView} from "../pages/author/view.js"
import {WitnessView} from "../pages/witness/view.js"
import {ErrorSituation, WitnessSituation} from "../../logic/parts/situation.js"

export const WhenstApp = shadowComponent(use => {
	use.styles(themeCss, stylesCss)
	const situation = context.situation.value

	return (
		(situation instanceof ErrorSituation) ?
			ErrorView([situation]) :
		(situation instanceof WitnessSituation) ?
			WitnessView([situation]) :
			AuthorView([situation])
	)
})

