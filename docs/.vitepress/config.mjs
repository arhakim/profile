import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/profile',
  siteTitle: 'Andri Rahman Hakim / Freelance Web Developer',
  lang: 'en-US',
  title: "Andri Rahman Hakim",
  description: "Freelance fullstack web developer, UI UX, Jasa Pembuatan Web, Gombong, Kebumen",
  head: [
    ['link', { rel: 'icon', href: '/profile/favicon.png' }],
    ['meta', { name: 'keywords', content: 'Andri Rahman Hakim, Arhakim, Full Stack, Web Developer, UI UX, Jasa Pembuatan Web, Gombong, Kebumen' }],
    ['meta', { name: 'author', content: 'Andri Rahman Hakim' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { property: 'og:url', content: 'http://www.ar-hakim.com' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: '/profile/logo.png' }],
    ['meta', { property: 'og:title', content: 'Andri Rahman Hakim / Freelance Full Stack Web Developer' }],
    ['meta', { property: 'og:site_name', content: 'Andri Rahman Hakim / Freelance Full Stack Web Developer' }],
    ['meta', { property: 'og:description', content: 'Freelance fullstack web developer, UI UX, Jasa Pembuatan Web, Gombong, Kebumen' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'About', link: '/about' },
      { text: 'Experience', link: '/experience' },
      { text: 'Education', link: '/education' },
      { text: 'Project', link: '/project' },
      { text: 'Contact', link: '/contact' },
      { text: 'Skill & Tools', link: '/skill-&-tools' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/arhakim' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/andrirahmanhakim' },
      { 
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="153" height="153" viewBox="0 0 24 24"><path fill="currentColor" d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076l.008-.042c.207-1.143.849-3.06 2.839-3.06a2.705 2.705 0 0 1 2.703 2.703a2.707 2.707 0 0 1-2.704 2.702m0-8.14c-2.539 0-4.51 1.649-5.31 4.366c-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112a2.55 2.55 0 0 1-2.547 2.548a2.55 2.55 0 0 1-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303c2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109c3 0 5.439-2.452 5.439-5.45c0-3-2.439-5.439-5.439-5.439"/></svg>'
        }, 
        link: 'https://www.upwork.com/users/~018d0f726de921e9d5',
        ariaLabel: 'Upwork'
      }
    ],

    footer: {
      message: 'Built using <a href="https://vitepress.dev" target="_blank">VitePress</a>',
      copyright: 'Copyright © 2024 <a href="https://github.com/arhakim" target="_blank">Andri Rahman Hakim</a>'
    }
  }
})
