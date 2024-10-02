// const flowbite = require('flowbite-react/tailwind')

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './node_modules/flowbite/**/*.js',
        './src/**/*.{js,ts,jsx,tsx}',
        // flowbite.content(),
    ],
    darkMode: ['selector'],
    theme: {
        // colors: ({ colors }) => ({
        //     primary: {
        //         100: '#1fb6ff',
        //         200: '1fb6ff',
        //     },
        //     blue: colors.blue,
        // }),
        extend: {
            fontFamily: {
                // sans: ['Graphik', 'sans-serif'],
                // serif: ['Merriweather', 'serif'],
            },
            brightness: {
                65: '.65',
            },
            colors: {
                primary: {
                    100: '#1fb6ff',
                    200: '1fb6ff',
                },
            },
        },
        // screens: {
        // 	xl: '1440px',
        // },
        // colors: {
        // 	violet: '#1fb6ff',
        // },
    },
    plugins: [
        require('flowbite/plugin'),
        // flowbite.plugin()
    ],
}
