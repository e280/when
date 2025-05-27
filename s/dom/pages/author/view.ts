
import {debounce} from "@e280/stz"
import {html, shadowView} from "@benev/slate"

import stylesCss from "./styles.css.js"
import themeCss from "../../theme.css.js"

import {constants} from "../../../constants.js"
import {TimeView} from "../../views/time-view/view.js"
import {Timelink} from "../../../logic/parts/timelink.js"
import {AuthorSituation} from "../../../logic/parts/situation.js"

export const AuthorView = shadowView(use => (_situation: AuthorSituation) => {
	use.name("author")
	use.css(themeCss, stylesCss)

	const text = use.signal("")
	const remaining = constants.textLimit - text.value.length
	const timelink = new Timelink(Date.now(), text.value)
	const timelinkUrl = timelink.toUrl()

	const updateMarkdown = use.once(() => {
		const update = debounce(200, (input: HTMLTextAreaElement) => {
			text.value = input.value ?? ""
		})
		return (event: Event) => update(event.currentTarget as HTMLTextAreaElement)
	})

	return html`
		<h2>Create a time link</h2>

		<input
			class=timepicker
			type=datetime-local
			/>

		<div class=split>
			<div>
				<textarea
					theme-markdown
					maxlength="${constants.textLimit}"
					@input="${updateMarkdown}"
				></textarea>
				<p class=remaining>${remaining} remaining</p>
				<a class=timelink target=_blank href="${timelinkUrl}">${timelinkUrl}</a>
			</div>
			${TimeView([timelink])}
		</div>
	`
})

