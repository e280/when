
import MarkdownIt from "markdown-it"
import {html, shadowComponent} from "@benev/slate"
import {unsafeHTML} from "lit/directives/unsafe-html.js"

import themeCss from "../theme.css.js"
import stylesCss from "./styles.css.js"

import {context} from "../../../logic/context.js"
import {ErroringSituation, ViewingSituation} from "../../../logic/parts/situation.js"

export const WhenstApp = shadowComponent(use => {
	use.styles(themeCss, stylesCss)

	const sitch = (
		(context.situation.value instanceof ErroringSituation) ?
			"erroring" :
		(context.situation.value instanceof ViewingSituation) ?
			"viewing" :
			"authoring"
	)

	const md = `***markdown*** test https://e280.org/`
	const markdown = new MarkdownIt({breaks: true, linkify: true})
	const test = markdown.render(md)

	return html`
		<p>[${sitch}]</p>
		<section>
			${unsafeHTML(test)}
		</section>
	`
})

