
import {html, shadowComponent} from "@benev/slate"
import stylesCss from "./styles.css.js"

export const WhenApp = shadowComponent(use => {
	use.styles(stylesCss)

	return html`
		<p>lol</p>
	`
})

