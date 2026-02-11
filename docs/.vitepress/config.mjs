import { defineConfig } from 'vitepress'

const GA_TAG_ID = 'G-SH0F5PRVDD' // Google Analytics Tracking ID

// https://vitepress.dev/reference/site-config
export default defineConfig({
  siteTitle: 'Andri Rahman Hakim / Fullstack Web Developer',
  lang: 'en-US',
  lastUpdated: true,
  cleanUrls: true,
  title: "Andri Rahman Hakim",
  description: "Fullstack web developer, UI UX, Jasa Pembuatan Web, Gombong, Kebumen",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    [ 'link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    [ 'link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap', rel: 'stylesheet' }],
    ['meta', { name: 'keywords', content: 'Andri Rahman Hakim, Arhakim, Full Stack, Web Developer, UI UX, Jasa Pembuatan Web, Gombong, Kebumen' }],
    ['meta', { name: 'author', content: 'Andri Rahman Hakim' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { property: 'og:url', content: 'https://www.ar-hakim.com' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: 'https://ar-hakim.com/logo.png' }],
    ['meta', { property: 'og:title', content: 'Andri Rahman Hakim / Fullstack Web Developer' }],
    ['meta', { property: 'og:site_name', content: 'Andri Rahman Hakim / Fullstack Web Developer' }],
    ['meta', { property: 'og:description', content: 'Fullstack web developer, UI UX, Jasa Pembuatan Web, Gombong, Kebumen' }],
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id='+GA_TAG_ID }],
    ['script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TAG_ID}');`
    ]
  ],
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/logo.png',
        returnToTopLabel: 'Back to top',
        nav: [
          { text: 'About', link: '/about' },
          { text: 'Experiences', link: '/experience' },
          { text: 'Educations', link: '/education' },
          { text: 'Projects', link: '/project' },
          { text: 'Skills & Tools', link: '/skills-&-tools' },
          // { text: 'Friends', link: '/friend' },
          { text: 'Contact', link: '/contact' }
        ],
      },
    },
    id: {
      label: 'Indonesian',
      lang: 'id',
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/logo.png',
        returnToTopLabel: 'Kembali ke atas',
        outlineTitle: 'Di halaman ini',
        nav: [
          { text: 'Tentang', link: '/id/about' },
          { text: 'Pengalaman', link: '/id/experience' },
          { text: 'Pendidikan', link: '/id/education' },
          { text: 'Proyek', link: '/id/project' },
          { text: 'Keahlian & Alat', link: '/id/skills-&-tools' },
          // { text: 'Teman', link: '/id/friend' },
          { text: 'Kontak', link: '/id/contact' }
        ],
      },
    }
  },
  sitemap: {
    hostname: 'https://ar-hakim.com'
  },
  vite: { 
    ssr: { noExternal: ['@cynber/vitepress-valence']} 
  }, 
  externalLinkIcon: true,
  markdown: {
    image: {
      // image lazy loading is disabled by default
      lazyLoading: true
    }
  }
})

