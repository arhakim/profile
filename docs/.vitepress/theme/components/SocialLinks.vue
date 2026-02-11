<template>
  <div class="flex gap-2">
    <div v-for="social in socialLinks" :key="social.name" class="lg:tooltip" :data-tip="social.name">
      <a 
        :href="social.url" 
        target="_blank" 
        class="!text-[var(--vp-c-text-1)]"
      >
        <Icon :icon="social.icon" class="size-10" />
      </a>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";


const socialLinks = [
  {
    name: 'Github',
    icon: 'bxl:github',
    url: 'https://github.com/arhakim'
  },{
    name: 'LinkedIn',
    icon: 'bxl:linkedin-square',
    url: 'https://linkedin.com/in/andrirahmanhakim'
  },{
    name: 'Resume (PDF)',
    icon: 'mdi:file-pdf-box',
    url: '/andri_rahman_hakim-resume.pdf'
  }
]
</script>
