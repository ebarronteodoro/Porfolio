/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				changeBorderRadius: {
					'0%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
					'100%': { borderRadius: '40% 60% 70% 30%/40% 70% 30% 60%' }
				}
			},

			animation: {
				"change-border-radius": "changeBorderRadius 3s ease-in-out infinite alternate"
			}
		},
	},
	plugins: [],
}
