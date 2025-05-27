
import "@benev/slate/x/node.js"
import {template, html, easypage, headScripts, git_commit_hash, read_file, read_json, unsanitized, renderSocialCard} from "@benev/turtle"

const domain = "when.e280.org"
const favicon = "/assets/clock.png"
const version = (await read_json("package.json")).version

export default template(async basic => {
	const path = basic.path(import.meta.url)
	const hash = await git_commit_hash()
	const faviconVersioned = await path.version.root(favicon)

	return easypage({
		path,
		dark: true,
		title: "When",
		head: html`
			<link rel="icon" href="${faviconVersioned}"/>
			<style>${unsanitized(await read_file("x/main.css"))}</style>
			<meta data-commit-hash="${hash}"/>
			<meta data-version="${version}"/>

			${renderSocialCard({
				themeColor: "#aaa",
				siteName: domain,
				title: "When – tell people when",
				description: "Always shows times in everyone's own local timezone.",
				image: `https://${domain}${favicon}`,
				url: `https://${domain}/`,
			})}

			${headScripts({
				devModulePath: await path.version.local("main.bundle.js"),
				prodModulePath: await path.version.local("main.bundle.min.js"),
				importmapContent: await read_file("x/importmap.json"),
			})}
		`,
		body: html`
			<h1>When</h1>

			<when-app></when-app>

			<footer>
				<p>Tell people what time it is, in their local timezone.</p>
				<p>Learn more on <a href="https://github.com/e280/when#readme" target=_blank>GitHub</a>.</p>
				<p class=version>v${version}</p>
			</footer>
		`,
	})
})

