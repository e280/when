
import "@benev/slate/x/node.js"
import {template, html, easypage, headScripts, git_commit_hash, read_file, read_json, unsanitized, renderSocialCard} from "@benev/turtle"

const domain = "whenst.e280.org"
const favicon = "/assets/clock.png"
const version = (await read_json("package.json")).version

export default template(async basic => {
	const path = basic.path(import.meta.url)
	const hash = await git_commit_hash()
	const faviconVersioned = await path.version.root(favicon)

	return easypage({
		path,
		dark: true,
		title: "Whenst",
		head: html`
			<link rel="icon" href="${faviconVersioned}"/>
			<style>${unsanitized(await read_file("x/main.css"))}</style>
			<meta data-commit-hash="${hash}"/>
			<meta data-version="${version}"/>

			${renderSocialCard({
				themeColor: "#ff9b00",
				siteName: domain,
				title: "Whenst – tell people when",
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
			<main>
				<h1>Whenst</h1>
				<whenst-app></whenst-app>
				<footer>
					<p>Whenst helps people ignore timezones.</p>
					<p>Share a time link, and everybody sees it in their local timezone.</p>
					<p>Learn more on <a href="https://github.com/e280/whenst#readme" target=_blank>GitHub</a>.</p>
					<p class=version>v${version}</p>
				</footer>
			</main>
		`,
	})
})

