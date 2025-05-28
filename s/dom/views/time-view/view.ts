
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

	const date = new Date(timelink.time)
	const yyyy = date.getFullYear()
	const mm = date.getMonth() + 1
	const dd = date.getDate()
	const hours = date.getHours()
	const h = hours % 12 || 12
	const ampm = hours >= 12 ? "pm" : "am"
	const m = date.getMinutes()

	const formatter = new Intl.DateTimeFormat('en-US', {timeZoneName: 'long'})
	const parts = formatter.formatToParts(new Date())
	const zone = parts.find(part => part.type === "timeZoneName")?.value

	return html`
		<div class=time>
			<h1>
				<span>${yyyy}-${mm}-${dd}</span>
				<span>${h}:${m} ${ampm}</span>
				<span>${zone} (UTC-${date.getTimezoneOffset() / 60})</span>
			</h1>
		</div>
		<div class=preview theme-markdown>
			${unsafeHTML(content)}
		</div>
	`
})

