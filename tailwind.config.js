/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    red: '#ff4757',
                    blue: '#2ed573',
                    yellow: '#ffa502',
                    purple: '#a29bfe',
                    green: '#78be20',
                    orange: '#ff5722',
                },
                timeline: {
                    line: '#ff6b81',
                    year: '#1e90ff',
                },
                text: {
                    main: '#1a1a2e',
                    secondary: '#555',
                }
            },
            fontFamily: {
                poppins: ['var(--font-poppins)'],
                opensans: ['var(--font-open-sans)'],
            },
        },
    },
    plugins: [],
};
