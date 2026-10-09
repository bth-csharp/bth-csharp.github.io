// @ts-check
import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom'
import embeds from 'astro-embed/integration';
import starlightAutoSidebar from 'starlight-auto-sidebar'

// https://astro.build/config
export default defineConfig({
	site: 'https://bth-csharp.github.io/',
	base: '/',
	markdown: {
		remarkPlugins: [remarkReadingTime],
	},
	integrations: [
		embeds(),
		starlight({
			plugins: [
				starlightImageZoom(),
				starlightAutoSidebar(), // https://starlight-auto-sidebar.netlify.app/metadata/#label
			],
			title: 'Kursen CSharp',
			favicon: 'favicon.png',
			logo: {
				src: '@assets/leaf_256x256.png',
			},
			customCss: [
				'./src/styles/dbwebb.css',
			],
			editLink: {
				baseUrl: undefined,
			},
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/bth-csharp/bth-csharp.github.io'
				}
			],
			head: [
				{
					tag: 'script',
					attrs: {
						src: '/js/OpenDetailsFromHash.js',
						defer: true,
					},
				},
				{
					tag: 'script',
					attrs: {
						src: '/js/openIssue.js',
						defer: true,
					},
				},
				{
					tag: 'base',
					attrs: {
						href: ''
					}
				}
			],
			sidebar: [
				{
					label: 'Kursöversikt',
					link: "/"
				},
				{
					label: 'Kursmoment',
					collapsed: true,
					autogenerate: { directory: 'kmom' },
				},
			],
			pagination: false,
		}),
	],
});
