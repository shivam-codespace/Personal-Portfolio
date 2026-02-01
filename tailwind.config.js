/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./public/index.html"
	],
	theme: {
		extend: {
			colors: {
				primary: '#27272a',
				secondary: '#65656d',
				tertiary: '#acacb4',
				quaternary: '#e4e4e7',
				link: '#14b8a6',
			},
			fontFamily: {
				primary: ['Heebo', 'sans-serif'],
				secondary: ['Roboto', 'sans-serif'],
			},
			maxWidth: {
				'content': '1000px',
			},
			screens: {
				'xl-custom': '1270px',
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}