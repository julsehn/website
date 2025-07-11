module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx,md,mdx}',
    './components/**/*.{js,jsx,ts,tsx,md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ntts-blue': '#90cdf4',
        'ntts-blue-light': '#b3e0ff',
        'ntts-blue-hover': '#63b3ed',
        'dark-bg': '#0D1117',
        'dark-card': '#90cdf4',
        'dark-text': '#1a202c',
        'dark-text-secondary': '#374151',
        'dark-border': '#30363D',
      },
    }
  },
  plugins: [],
  darkMode: "class"
}
