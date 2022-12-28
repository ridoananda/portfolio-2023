/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#171717',
                primary: '#E89306',
                secondary: '#2C2C32',
                border: '#3F3F46',
                paragraph: colors.gray[300],
                // Social Media
                whatsapp: {
                    'teal-green': '#075E54',
                    'light-green': '#25d366',
                }
            },
            fontFamily: {
                head: ['"Catamaran"', ...defaultTheme.fontFamily.serif],
                sans: ['"DM Sans"', ...defaultTheme.fontFamily.sans],
            },
            container: {
                center: true,
                padding: '1rem',
            },
        },
    },
    plugins: [],
}