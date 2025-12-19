/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                veda: {
                    /* Primary – Brand Purple */
                    primary: {
                        DEFAULT: '#3E2A4F',
                        light: '#5A3F6E',
                        dark: '#2A1B38',
                    },

                    /* Secondary – Lavender */
                    secondary: {
                        DEFAULT: '#CFC6DF',
                        light: '#E8E3F1',
                        dark: '#B8ACC9',
                    },

                    /* Accent – Golden Yellow */
                    accent: {
                        DEFAULT: '#F2C14E',
                        light: '#F7D77A',
                        dark: '#E5AF3A',
                    },

                    /* Backgrounds */
                    background: {
                        DEFAULT: '#FFFFFF',
                        soft: '#FAF8F5',
                        muted: '#F1EDF7',
                    },

                    /* Text Colors */
                    text: {
                        DEFAULT: '#4A4A4A',
                        heading: '#3E2A4F',
                        muted: '#7A7A7A',
                        light: '#FFFFFF',
                    },

                    /* Child-friendly Extras */
                    playful: {
                        blue: '#A7C7E7',
                        green: '#A8C686',
                        peach: '#F4B6A6',
                    },

                    /* Utility */
                    border: '#E5E1EC',
                    shadow: '#00000014',
                },
            },
            fontFamily: {
                poppins: ['var(--font-poppins)'],
                opensans: ['var(--font-open-sans)'],
            },
            borderRadius: {
                'soft': '1rem',
                'softer': '1.5rem',
            },
            boxShadow: {
                'soft': '0 2px 8px rgba(0, 0, 0, 0.06)',
                'softer': '0 4px 16px rgba(0, 0, 0, 0.08)',
            },
        },
    },
    plugins: [],
};
