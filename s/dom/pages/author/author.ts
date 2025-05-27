
import {debounce} from "@e280/stz"
import MarkdownIt from "markdown-it"
import {html, shadowView} from "@benev/slate"

import stylesCss from "./styles.css.js"
import themeCss from "../../theme.css.js"

import {Timelink} from "../../../logic/parts/timelink.js"
import {unsafeHTML} from "lit/directives/unsafe-html.js"
import {AuthorSituation} from "../../../logic/parts/situation.js"
import {linksTargetBlank} from "../../../tools/md-links-target-blank.js"

const limit = 256
const markdownIt = new MarkdownIt({breaks: true, linkify: true})
markdownIt.use(linksTargetBlank)

export const AuthorView = shadowView(use => (_situation: AuthorSituation) => {
	use.name("author")
	use.css(themeCss, stylesCss)

	const markdown = use.signal("")
	const markdownPreview = markdownIt.render(markdown.value)
	const remaining = limit - markdown.value.length
	const timelinkUrl = new Timelink(Date.now(), markdown.value).toUrl()

	const updateMarkdown = use.once(() => {
		const update = debounce(200, (input: HTMLTextAreaElement) => {
			markdown.value = input.value ?? ""
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
					maxlength="${limit}"
					@input="${updateMarkdown}"
				></textarea>
				<p class=remaining>${remaining} remaining</p>
			</div>
			<div class=preview theme-markdown>
				${unsafeHTML(markdownPreview)}
			</div>
		</div>

		<a class=timelink target=_blank href="${timelinkUrl}">${timelinkUrl}</a>
	`
})

