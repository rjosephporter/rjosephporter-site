import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.antlers.php',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './content/**/*.md',
    ],

    darkMode: "class",

    theme: {
        container: {
            center: true,
            padding: "1.5rem",
        },
        extend: {
            screens: {
                "2xl": "1320px",
            },
            fontFamily: {
                sans: ['"Bricolage Grotesque"', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: "#4770FF",
                dark: "#1A1F2C",
                "dark-2": "#0E1018",
                light: "#F0F2F5",
                muted: "#576076",
            },
            aspectRatio: {
                "6/4": "6 / 4",
            },

            animation: {
                "infinite-scroll": "scroll 10s linear infinite",
                "scrollY": "scrollY 10s linear infinite",
                'spin-slow': 'spin 10s linear infinite',
                'spin-very-slow': 'spin 90s linear infinite',
            },

            keyframes: {
                scroll: {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(calc(-100% - 1.5rem))" },
                },
                scrollY: {
                    from: { transform: "translateY(0)" },
                    to: { transform: "translateY(calc(-100% - 1rem))" },
                },
            },
        },
    },

    plugins: [
        require("preline/plugin"),
        require('@tailwindcss/typography'),
    ],
};
