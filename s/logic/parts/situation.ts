
import {Timelink} from "./timelink.js"

export abstract class Situation {}

export class ErrorSituation extends Situation {}

export class AuthorSituation extends Situation {}

export class WitnessSituation extends Situation {
	constructor(public timelink: Timelink) {
		super()
	}
}

