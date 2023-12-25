import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'DM Sans fallback', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        // base: {
        //   50: 'var(--base)',
        //   100: 'var(--base-10)',
        //   200: 'var(--base-20)',
        //   300: 'var(--base-30)',
        //   400: 'var(--base-40)',
        //   500: 'var(--base-50)',
        //   600: 'var(--base-60)',
        //   700: 'var(--base-70)',
        //   800: 'var(--base-90)',
        //   900: 'var(--base-110)',
        //   950: 'var(--base-120)'
        // },
        // accent: {
        //   50: 'var(--accent-10)',
        //   100: 'var(--accent-20)',
        //   200: 'var(--accent-40)',
        //   300: 'var(--accent-50)',
        //   400: 'var(--accent-60)',
        //   500: 'var(--accent-70)',
        //   600: 'var(--accent-80)',
        //   700: 'var(--accent-90)',
        //   800: 'var(--accent-100)',
        //   900: 'var(--accent-110)',
        //   950: 'var(--accent-120)'
        // }
      }
    }
  }
}
