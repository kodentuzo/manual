import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import starlightThemeBlack from 'starlight-theme-black';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Kodentuzo Manual',
			plugins: [
				starlightThemeBlack({
					// No "Open in ChatGPT" style buttons on the pages.
					docs: { showMarkdownActions: false }
				})
			]
		})
	]
});
