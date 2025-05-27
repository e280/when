
import MarkdownIt from "markdown-it"
import {html, shadowView} from "@benev/slate"

import stylesCss from "./styles.css.js"
import themeCss from "../../theme.css.js"

import {unsafeHTML} from "lit/directives/unsafe-html.js"
import {Timelink} from "../../../logic/parts/timelink.js"
import {linksTargetBlank} from "../../../tools/md-links-target-blank.js"

const markdownIt = new MarkdownIt({breaks: true, linkify: true})
markdownIt.use(linksTargetBlank)

export const TimeView = shadowView(use => (timelink: Timelink) => {
	use.name("time")
	use.css(themeCss, stylesCss)

	const content = markdownIt.render(timelink.text)

	return html`
		<div class=preview theme-markdown>
			${unsafeHTML(content)}
		</div>
	`
})

