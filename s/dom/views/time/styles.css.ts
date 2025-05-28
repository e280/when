
import {css} from "@benev/slate"
export default css`

.plate {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: start;
	flex-wrap: wrap;
	gap: 1em;

	> * {
		flex: 1 1 17em;
	}
}

.timeframe {
	h1 {
		font-size: 1em;
		display: flex;
		flex-direction: column;
		gap: 0.5em;

		> span {
			display: flex;
			flex-direction: column;
		}

		.dash {
			opacity: 0.4;
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
}

`

