/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#101820",
        "red": "#B42A40",
        "orange": "#CA7B34",
      },
      fontFamily: {
				'squartiqa': 'squartiqa',
			},
      fontSize: {
        'xxs': '0.65rem',
      },
    },
  },
  plugins: [],
}
