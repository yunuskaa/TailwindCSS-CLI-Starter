module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'primary': 'rgba(83, 25, 249, 1)',
      'ost': 'rgba(83, 25, 249, 0.05)',
      'white': '#FFFF',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      mulish: ['Mulish', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      boxShadow: {
        'meown': '0px 0px 40px 0px rgba(234,234,234,0.7)',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
}