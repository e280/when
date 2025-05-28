
import {html, shadowView} from "@benev/slate"

import stylesCss from "./styles.css.js"
import themeCss from "../../theme.css.js"

import {TimeView} from "../../views/time/view.js"
import {WitnessSituation} from "../../../logic/parts/situation.js"

export const WitnessView = shadowView(use => (situation: WitnessSituation) => {
	use.name("witness")
	use.css(themeCss, stylesCss)

	return html`
		${TimeView([situation.timelink])}
	`
})

