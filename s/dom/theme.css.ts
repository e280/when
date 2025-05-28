
import {css} from "@benev/slate"
export default css`@layer theme, view; @layer theme {

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;

	scrollbar-width: thin;
	scrollbar-color: #444 transparent;
}

::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: #444; border-radius: 1em; }
::-webkit-scrollbar-thumb:hover { background: #666; }

a {
	color: var(--link);
	text-decoration: none;

	&:visited {
		color: color-mix(in srgb, purple, var(--link) 70%);
	}

	&:hover {
		color: color-mix(in srgb, white, var(--link) 90%);
		text-decoration: underline;
	}

	&:active {
		color: color-mix(in srgb, white, var(--link) 50%);
	}
}

[theme-plate] {
	padding: 1em;
	--bcolor: color-mix(in lch, transparent, currentColor 10%);
	border-top: 0.1em solid var(--bcolor);
	border-bottom: 0.1em solid #0004;
	box-shadow: 0.2em 0.3em 1em #0004;
	background: #7c504717;
	border-radius: 1em;
	-webkit-backdrop-filter: blur(0.4em);
	backdrop-filter: blur(0.4em);
}

[theme-markdown] {
	font: unset;
	text-align: left;
	word-wrap: break-word;
	overflow-wrap: break-word;

	img {
		max-width: 100%;
	}

	> * + * {
		margin-top: 0.7em;
	}

	hr {
		border: none;
		height: 0.1em;
		background: color-mix(in lch, transparent, currentColor 30%);
	}

	blockquote {
		border-left: 0.2em solid currentColor;
		background: color-mix(in lch, transparent, var(--accent) 10%);
		padding-left: 0.5em;
	}

	:is(ol, ul) {
		padding-left: 1.5em;
	}
}

}`

