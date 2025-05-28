
import {css} from "@benev/slate"
export default css`

:host {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1em;
}

:host > h2 {
	color: var(--accent);
}

section {
	display: flex;
	flex-direction: column;
	align-items: stretch;
	gap: 0.1em;

	width: 100%;

	> p:first-of-type {
		opacity: 0.3;
		padding: 0 1em;
		text-transform: uppercase;
		font-family: sans-serif;
		font-weight: bold;
		text-align: left;
		align-self: start;
	}

	> div {
		display: flex;
		flex-direction: column;
		gap: 0.5em;
	}

	textarea {
		min-height: 6em;
		padding: 0.5em;
	}

	[view="slate"] {
		width: 100%;
	}
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

@media (width > 400px) { .timepicker { font-size: 1em; } }
@media (width > 600px) { .timepicker { font-size: 1.3em; } }

small {
	opacity: 0.5;
	font-size: 0.8em;
	text-align: right;
	padding: 0 1em;
}

.timelink {
	font-family: sans-serif;
	font-size: 1.3em;
	word-break: break-all;
}

`

