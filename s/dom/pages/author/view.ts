
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

	const time = use.signal(Date.now())
	const text = use.signal("")

	const timelink = new Timelink(time.value, text.value)
	const timelinkUrl = timelink.toUrl()
	const remaining = constants.textLimit - text.value.length

	const updateMarkdown = use.once(() => {
		const update = debounce(200, (input: HTMLTextAreaElement) => {
			text.value = input.value ?? ""
		})
		return (event: Event) => update(event.currentTarget as HTMLTextAreaElement)
	})

	const updateTime = (event: InputEvent) => {
		const input = event.currentTarget as HTMLInputElement
		time.value = new Date(input.value).getTime()
	}

	return html`
		<h2>Choose a time for your event</h2>

		<input
			class=timepicker
			type=datetime-local
			@input="${updateTime}"
			/>

		<h2>Write a small optional description</h2>

		<div class=split>
			<div>
				<textarea
					theme-markdown
					placeholder="type your short description..."
					maxlength="${constants.textLimit}"
					@input="${updateMarkdown}"
				></textarea>
				<p class=remaining>${remaining} remaining</p>
			</div>
			${TimeView([timelink])}
		</div>

		<h2>Send this time link to your friends</h2>
		<a class=timelink rel="nofollow" href="${timelinkUrl}">${timelinkUrl}</a>
	`
})

