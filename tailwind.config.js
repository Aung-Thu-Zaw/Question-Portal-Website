/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1200px",
            xxl: "1440px",
        },
        extend: {
            colors: {
                brand: "#8EC1D6",
                dark: "#3D4B5F",
                mid: "#CBD5E1",
                light: "#F8FAFC",
            },
            fontFamily: {
                libre: ["Libre Baskerville", "serif"],
                playfair: ["Playfair Display", "serif"],
            },
        },
    },
    plugins: [],
};
