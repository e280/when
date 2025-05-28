
import {css} from "@benev/slate"
export default css`

.plate {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: stretch;
	flex-wrap: wrap;
	gap: 1em;

	> * {
		flex: 0 1 auto;
	}
}

.timeframe {
	display: flex;
	flex-direction: column;
	gap: 0.5em;

	> span {
		display: flex;
		flex-direction: column;
	}

	.casual {
		font-size: 1.4em;
		color: var(--prime);
	}

	.precise {
		opacity: 0.9;
		font-size: 0.7em;
		font-family: monospace;
		font-weight: normal;
	}
}

.preview {
	flex-grow: 1;
	flex-basis: 10em;
	padding-left: 1em;
	border-left: 0.1em solid color-mix(in lch, transparent, currentColor 20%);
}

`

