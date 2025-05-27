
import {BaseX} from "@e280/stz"

export const Codecs = Object.freeze({
	hex: new BaseX(BaseX.lexicons.hex),
	base62: new BaseX(BaseX.lexicons.base62),
})

