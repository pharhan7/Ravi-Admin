/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#F1F5F9',
        accent: '#6366F1',
        success: '#22C55E',
        warning: '#FACC15',
        danger: '#EF4444',
        neutral: '#64748B',
      },
    },
  },
  plugins: [],
}
