---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  text: "Crafting scalable web solutions with passion and expertise."
  tagline: I am fullstack web developer which is passionate build various web application ranging from full website development to small programming jobs.
  image: /logo.png
  actions:
    - theme: alt
      text: Observe My Accomplishments. 🤖
      link: /project
    - theme: alt
      text: Download Resume 📄
      link: /andri_rahman_hakim-resume.pdf
      target: _blank
---

<script setup>
import { useData } from 'vitepress'

const { theme } = useData()
const isDark = theme.value === 'dark' ? true : false
</script>
