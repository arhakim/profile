import { defineConfig } from 'vitepress'

let baseUrl = '/profile'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: baseUrl,
  siteTitle: 'Andri Rahman Hakim / Freelance Web Developer',
  lang: 'en-US',
  lastUpdated: true,
  cleanUrls: true,
  title: "Andri Rahman Hakim",
  description: "Freelance fullstack web developer, UI UX, Jasa Pembuatan Web, Gombong, Kebumen",
  head: [
    ['link', { rel: 'icon', href: '/profile/favicon.png' }],
    ['meta', { name: 'keywords', content: 'Andri Rahman Hakim, Arhakim, Full Stack, Web Developer, UI UX, Jasa Pembuatan Web, Gombong, Kebumen' }],
    ['meta', { name: 'author', content: 'Andri Rahman Hakim' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    // ['meta', { property: 'og:url', content: 'http://www.ar-hakim.com' }],
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
      { text: 'Experiences', link: '/experience' },
      { text: 'Educations', link: '/education' },
      { text: 'Projects', link: '/project' },
      { text: 'Skills & Tools', link: '/skill-&-tools' },
      // { text: 'Friends', link: '/friend' },
      { text: 'Contact', link: '/contact' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/arhakim' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/andrirahmanhakim' },
      { 
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076l.008-.042c.207-1.143.849-3.06 2.839-3.06a2.705 2.705 0 0 1 2.703 2.703a2.707 2.707 0 0 1-2.704 2.702m0-8.14c-2.539 0-4.51 1.649-5.31 4.366c-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112a2.55 2.55 0 0 1-2.547 2.548a2.55 2.55 0 0 1-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303c2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109c3 0 5.439-2.452 5.439-5.45c0-3-2.439-5.439-5.439-5.439"/></svg>'
        }, 
        link: 'https://www.upwork.com/users/~018d0f726de921e9d5',
        ariaLabel: 'Upwork'
      },
      { 
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115.28 122.88"><path fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" d="M25.38,57h64.88V37.34H69.59c-2.17,0-5.19-1.17-6.62-2.6c-1.43-1.43-2.3-4.01-2.3-6.17V7.64l0,0H8.15 c-0.18,0-0.32,0.09-0.41,0.18C7.59,7.92,7.55,8.05,7.55,8.24v106.45c0,0.14,0.09,0.32,0.18,0.41c0.09,0.14,0.28,0.18,0.41,0.18 c22.78,0,58.09,0,81.51,0c0.18,0,0.17-0.09,0.27-0.18c0.14-0.09,0.33-0.28,0.33-0.41v-11.16H25.38c-4.14,0-7.56-3.4-7.56-7.56 V64.55C17.82,60.4,21.22,57,25.38,57L25.38,57z M29.5,67.4h13.19c2.87,0,5.02,0.68,6.46,2.05c1.43,1.37,2.14,3.31,2.14,5.84 c0,2.59-0.78,4.62-2.34,6.08c-1.56,1.46-3.94,2.19-7.14,2.19h-4.35v9.49H29.5V67.4L29.5,67.4z M37.45,78.37h1.95 c1.54,0,2.62-0.27,3.24-0.8c0.62-0.53,0.93-1.21,0.93-2.04c0-0.81-0.27-1.49-0.81-2.05c-0.54-0.56-1.55-0.84-3.05-0.84h-2.27V78.37 L37.45,78.37z M54.99,67.4h11.78c2.32,0,4.2,0.32,5.63,0.94c1.43,0.63,2.61,1.53,3.55,2.71c0.93,1.18,1.61,2.55,2.02,4.11 c0.42,1.56,0.63,3.22,0.63,4.97c0,2.74-0.31,4.87-0.94,6.38c-0.62,1.51-1.49,2.78-2.6,3.8c-1.11,1.02-2.3,1.7-3.57,2.04 c-1.74,0.47-3.31,0.7-4.72,0.7H54.99V67.4L54.99,67.4z M62.9,73.21v14.01h1.95c1.66,0,2.84-0.19,3.55-0.55 c0.7-0.37,1.25-1.01,1.65-1.92c0.4-0.92,0.6-2.4,0.6-4.45c0-2.72-0.44-4.57-1.33-5.58c-0.89-1-2.36-1.5-4.42-1.5H62.9L62.9,73.21z M82.25,67.4h19.6v5.52H90.21v4.48h9.96v5.2h-9.96v10.46h-7.95V67.4L82.25,67.4z M97.79,57h9.93c4.16,0,7.56,3.41,7.56,7.56v31.42 c0,4.15-3.41,7.56-7.56,7.56h-9.93v13.55c0,1.61-0.65,3.04-1.7,4.1c-1.06,1.06-2.49,1.7-4.1,1.7c-29.44,0-56.59,0-86.18,0 c-1.61,0-3.04-0.64-4.1-1.7c-1.06-1.06-1.7-2.49-1.7-4.1V5.85c0-1.61,0.65-3.04,1.7-4.1c1.06-1.06,2.53-1.7,4.1-1.7h58.72 C64.66,0,64.8,0,64.94,0c0.64,0,1.29,0.28,1.75,0.69h0.09c0.09,0.05,0.14,0.09,0.23,0.18l29.99,30.36c0.51,0.51,0.88,1.2,0.88,1.98 c0,0.23-0.05,0.41-0.09,0.65V57L97.79,57z M67.52,27.97V8.94l21.43,21.7H70.19c-0.74,0-1.38-0.32-1.89-0.78 C67.84,29.4,67.52,28.71,67.52,27.97L67.52,27.97z"/></svg>'
        }, 
        link: baseUrl + '/andri_rahman_hakim-resume.pdf',
        ariaLabel: 'Resume (PDF)'
      }
    ],

    footer: {
      // message: 'Built using <a href="https://vitepress.dev" target="_blank">VitePress</a>',
      copyright: 'Copyright © 2025 <a href="https://github.com/arhakim" target="_blank">Andri Rahman Hakim</a>'
    }
  },
  sitemap: {
    hostname: 'https://arhakim.github.io/profile'
  }
})
