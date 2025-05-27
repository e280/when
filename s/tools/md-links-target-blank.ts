
import {PluginSimple} from "markdown-it"

export const linksTargetBlank: PluginSimple = md => {
	md.renderer.rules.link_open = (tokens, idx, options, _env, self) => {
		const token = tokens[idx]

		const targetAttr = token.attrs?.find(attr => attr[0] === "target")
		if (!targetAttr) token.attrPush(["target", "_blank"])

		const relAttr = token.attrs?.find(attr => attr[0] === "rel")
		if (!relAttr) token.attrPush(["rel", "noopener noreferrer"])

		return self.renderToken(tokens, idx, options)
	}
}

