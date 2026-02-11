// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import '@cynber/vitepress-valence/style.css'
import CustomFooter from './components/CustomFooter.vue'
import TechStack from './components/TechStack.vue'
import TechStackBadge from './components/TechStackBadge.vue'
import SocialLinks from './components/SocialLinks.vue'
import AvailabilityBadge from './components/AvailabilityBadge.vue'
// import ProjectSwiper from './components/ProjectSwiper.vue'
import { VpvImageGallery } from '@cynber/vitepress-valence'

import { data as galleryData } from './data/gallery.data.js';

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'layout-bottom': () => h(CustomFooter)
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('TechStack', TechStack)
    app.component('TechStackBadge', TechStackBadge)
    app.component('SocialLinks', SocialLinks)
    app.component('AvailabilityBadge', AvailabilityBadge)
    // app.component('ProjectSwiper', ProjectSwiper)
    app.component('VpvImageGallery', VpvImageGallery)

    app.provide('galleryData', galleryData)  
  }
}
