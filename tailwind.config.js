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
                    primary: '#FF9933', // Saffron Orange
                    secondary: '#00AEEF', // Cyan Blue
                    red: '#E31E24', // CTA Red
                    green: '#78BE20', // Lime Green
                    yellow: '#FFD700', // Gold
                    purple: '#A29BFE', // Pastel Purple
                    navy: '#1A2B49', // Dark Navy for Footer
                    orange: '#ff5722', // Keeping original orange just in case
                },
                text: {
                    main: '#2D2D2D', // Charcoal
                    light: '#555555',
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
