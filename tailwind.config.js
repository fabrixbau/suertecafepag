module.exports = {
  content: ['./*html'],
  theme: {
    extend: {
      colors: {
        'custom-brown': '#8B5A2B',
        'custom-brown-lighten': 'tailwind-color(lighten(#D2B48C, 10))',
        olive: {
          200: '#AABD8C',
          700: '#5F7832',
        },
      },
    },
  },
  plugins: [],
}
