
import {css} from "@benev/slate"
export default css`

:host {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5em;
}

:host > h2 {
	color: var(--accent);
}

.timepicker {
	font-size: 0.7em;
	padding: 0.5em;
}

.input {
	border-radius: 0.5em;
	color: white;
	background: #0004;
	border: 0.1em solid color-mix(in lch, transparent, currentColor 10%);
	border-radius: 0.5em;
}

.split {
	display: flex;
	flex-wrap: wrap;
	align-items: stretch;
	width: 100%;
	gap: 0.5em;

	> * {
		flex: 1 1 16em;
		width: 50%;
		display: flex;
		flex-direction: column;

		textarea {
			flex: 1 1 auto;
			min-height: 6em;
			padding: 0.5em;
		}
	}
}

@media (width > 400px) { .timepicker { font-size: 1em; } }
@media (width > 600px) { .timepicker { font-size: 1.3em; } }

small {
	opacity: 0.5;
	font-size: 0.8em;
	text-align: right;
	padding: 0 1em;
}

[view="time"] {
	border-radius: 0.5em;
	padding: 0.5em;
	border: 0.1em solid color-mix(in lch, transparent, currentColor 10%);
}

.preview {
	background: #0008;
}

.timelink {
	font-size: 1.3em;
	word-break: break-all;
}

* + h2 {
	margin-top: 1em;
}

`

