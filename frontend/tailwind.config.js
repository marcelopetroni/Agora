/** @type {import('tailwindcss').Config} */
export default {
	prefix: 'ag-',
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				darkpurple: '#392239',
				lightpurple: '#533753',
				bege: '#F6F5D9',
				yellowag: '#EEEBB3',
			},
			fontFamily: {
				'amiko': ['Amiko', 'sans-serif'] // Example for using Roboto from Google Fonts
			},
		},
	},
	plugins: [],
}