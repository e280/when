
import {debounce} from "@e280/stz"
import {html, shadowView} from "@benev/slate"

import stylesCss from "./styles.css.js"
import themeCss from "../../theme.css.js"

import {constants} from "../../../constants.js"
import {TimeView} from "../../views/time/view.js"
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
			text.value = (input.value ?? "").trim()
		})
		return (event: Event) => update(event.currentTarget as HTMLTextAreaElement)
	})

	const updateTime = (event: InputEvent) => {
		const input = event.currentTarget as HTMLInputElement
		time.value = new Date(input.value).getTime()
	}

	return html`
		<section>
			<p>Choose time and description</p>
			<div theme-plate>
				<input
					class="timepicker input"
					type=datetime-local
					@input="${updateTime}"
					/>
				<textarea
					class="text input"
					theme-markdown
					placeholder="short optional markdown description..."
					maxlength="${constants.textLimit}"
					@input="${updateMarkdown}"
				></textarea>
				<small>${remaining} character${remaining === 1 ?"" :"s"} remaining</small>
			</div>
		</section>

		<section>
			<p>Preview</p>
			<div theme-plate>
				${TimeView([timelink])}
			</div>
		</section>

		<section>
			<p>Send link to your friends</p>
			<div theme-plate>
				<a class=timelink rel="nofollow" target=_blank href="${timelinkUrl}">${timelinkUrl}</a>
			</div>
		</section>
	`
})

