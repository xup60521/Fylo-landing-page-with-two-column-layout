/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                c_Very_Dark_Blue: "hsl(243, 87%, 12%)",
                c_Desaturated_Blue: "hsl(238, 22%, 44%)",
                c_Bright_Blue: "hsl(224, 93%, 58%)",
                c_Moderate_Cyan: "hsl(170, 45%, 43%)",
                c_Light_Grayish_Blue: "hsl(240, 75%, 98%)",
                c_Light_Gray: "hsl(0, 0%, 75%)",
            },
            fontFamily: {
                paragraph_sans: ["Open Sans", "sans-serif"],
                heading_btn_nav: ["Raleway", "system-ui"]
            }
        },
    },
    plugins: [],
}

