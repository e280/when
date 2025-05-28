
import MarkdownIt from "markdown-it"
import {html, shadowView} from "@benev/slate"

import stylesCss from "./styles.css.js"
import themeCss from "../../theme.css.js"

import {unsafeHTML} from "lit/directives/unsafe-html.js"
import {Timelink} from "../../../logic/parts/timelink.js"
import {linksTargetBlank} from "../../../tools/md-links-target-blank.js"
import {getLocalTime, getLocalTimezone, getUniversalTime} from "../../../logic/parts/timekeeper.js"

const markdownIt = new MarkdownIt({breaks: true, linkify: true})
markdownIt.use(linksTargetBlank)

export const TimeView = shadowView(use => (timelink: Timelink) => {
	use.name("time")
	use.css(themeCss, stylesCss)

	const content = timelink.text
		? markdownIt.render(timelink.text)
		: undefined

	const timezone = getLocalTimezone()
	const local = getLocalTime(timelink.time)
	const universal = getUniversalTime(timelink.time)

	return html`
		<div class=plate>
			<div class=timeframe>
				<h1>
					<span class="local casual">
						<span>
							<span class=weekday>${local.weekdayName}</span>
							<span class=time>${local.hour12}:${local.minutePad} ${local.ampm},</span>
							<span class=day>${local.monthName} ${local.day}</span>
						</span>
					</span>
					<span class="local precise" title="${timezone.long} (${timezone.offset})">
						${timezone.short} ${local.year}-${local.monthPad}-${local.dayPad} ${local.hourPad}:${local.minutePad}
					</span>
					<span class="universal precise">
						UTC ${universal.year}-${universal.monthPad}-${universal.dayPad} ${universal.hourPad}:${universal.minutePad}
					</span>
				</h1>
			</div>

			${content ? html`
				<div class=preview theme-markdown>
					${unsafeHTML(content)}
				</div>
			` : undefined}
		</div>
	`
})

