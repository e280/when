
import {shadowView} from "@benev/slate"
import stylesCss from "./styles.css.js"
import themeCss from "../../theme.css.js"
import {calculateCountdown} from "../../../logic/parts/countdown.js"

export const CountdownView = shadowView(use => (time: number) => {
	use.name("countdown")
	use.css(themeCss, stylesCss)

	const countdown = calculateCountdown(time)

	use.mount(() => {
		const interval = setInterval(() => use.rerender(), 1000)
		return () => clearInterval(interval)
	})

	return countdown
})

