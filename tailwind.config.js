/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0b0b0b',
                surface: '#111111',
                'surface-light': '#1a1a1a',
                primary: {
                    DEFAULT: '#ff7a00',
                    hover: '#cc6200',
                    light: '#ff9433',
                },
                text: {
                    DEFAULT: '#f5f5f5',
                    muted: '#888888',
                    dark: '#666666',
                },
                gold: '#d4af37',
            },
            fontFamily: {
                sans: ['Outfit', 'system-ui', 'sans-serif'],
                display: ['Playfair Display', 'Georgia', 'serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.8s ease-out forwards',
                'slide-up': 'slideUp 0.8s ease-out forwards',
                'pulse-slow': 'pulse 3s ease-in-out infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-premium': 'linear-gradient(135deg, #ff7a00 0%, #cc6200 100%)',
            },
        },
    },
    plugins: [],
}
