
import {html, shadowComponent} from "@benev/slate"
import themeCss from "../theme.css.js"
import stylesCss from "./styles.css.js"
import {getLocalTimezone} from "../../logic/parts/timekeeper.js"

export const WhenstTimezone = shadowComponent(use => {
	use.styles(themeCss, stylesCss)
	const timezone = getLocalTimezone()

	return html`
		Local timezone is ${timezone.long} (${timezone.offset})
	`
})

