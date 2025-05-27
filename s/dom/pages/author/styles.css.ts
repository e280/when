
import {css} from "@benev/slate"
export default css`

:host {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5em;
}

.timepicker {
	font-size: 1.3em;
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
		}
	}
}

.remaining {
	opacity: 0.5;
	font-size: 0.8em;
	text-align: right;
	padding: 0 1em;
}

.preview {
	background: #0008;
}

.timelink {
	word-break: break-all;
}

`

