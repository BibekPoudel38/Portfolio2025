/** @type {import('tailwindcss').Config} */
export {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
        darkMode: 'class',
            theme: {
    extend: { 
        colors: {
            'gradient-start': '#023047',
            'gradient-end': '#219ebc',
        },
    },
},
plugins: [],
}
