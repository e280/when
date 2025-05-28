
import {html, shadowView} from "@benev/slate"
import stylesCss from "./styles.css.js"
import themeCss from "../../theme.css.js"

export const CountdownView = shadowView(use => (time: number) => {
	use.name("countdown")
	use.css(themeCss, stylesCss)

	return html`
	`
})

