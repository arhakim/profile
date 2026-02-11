/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './docs/**/*.{md,vue}',
    './docs/.vitepress/**/*.vue',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
