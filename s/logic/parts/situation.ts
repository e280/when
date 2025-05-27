
export abstract class Situation {}

export class ErroringSituation extends Situation {}

export class AuthoringSituation extends Situation {}

export class ViewingSituation extends Situation {
	constructor(
		public time: number,
		public label: string,
	) { super() }
}

