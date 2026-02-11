<template>
  <div>
    <div class="divider">{{ title }}</div>

    <div class="md:w-1/2 mx-auto flex justify-center">
      <div class="flex flex-wrap justify-center gap-4">
        <div v-for="icon in icons" :key="icon.name" class="tooltip group" :data-tip="icon.name">
          <label class="swap swap-flip text-9xl">
            <input type="checkbox" />
            <div class="swap-on">
              <Icon :icon="icon.iconColor" class="size-10" :color="icon.color" />
            </div>
            <div class="swap-off">
              <Icon :icon="icon.icon" class="size-10 opacity-50 group-hover:opacity-100" />
            </div>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";

defineProps({
  title: {
    type: String,
    default: 'Experienced using:'
  }
})

const icons = [
  { name: 'PHP', icon: 'bxl:php', iconColor: 'bxl:php', color: '#6181b6'},
  { name: 'Laravel', icon: 'streamline-logos:laravel-logo-1-solid', iconColor: 'logos:laravel', color: ''},
  { name: 'CodeIgniter', icon: 'streamline-logos:codeigniter-logo-solid', iconColor: 'logos:codeigniter-icon', color: ''},
  { name: 'ExpressJS', icon: 'simple-icons:express', iconColor: 'simple-icons:express', color: ''},
  { name: 'Prisma', icon: 'simple-icons:prisma', iconColor: 'simple-icons:prisma', color: ''},
  { name: 'MySQL', icon: 'simple-icons:mysql', iconColor: 'logos:mysql', color: ''},
  { name: 'PostgreSQL', icon: 'bxl:postgresql', iconColor: 'logos:postgresql', color: ''},
  { name: 'HTML 5', icon: 'bxl:html5', iconColor: 'logos:html-5', color: ''},
  { name: 'Javascript', icon: 'bxl:javascript', iconColor: 'logos:javascript', color: ''},
  { name: 'VueJS', icon: 'bxl:vuejs', iconColor: 'logos:vue', color: ''},
  { name: 'Nuxt', icon: 'simple-icons:nuxt', iconColor: 'logos:nuxt-icon', color: ''},
  { name: 'ReactJS', icon: 'bxl:react', iconColor: 'logos:react', color: ''},
  { name: 'NextJS', icon: 'simple-icons:nextdotjs', iconColor: 'logos:nextjs-icon', color: ''},
  { name: 'JQuery', icon: 'bxl:jquery', iconColor: 'bxl:jquery', color: '#076aad'},
  { name: 'TypeScript', icon: 'bxl:typescript', iconColor: 'logos:typescript-icon', color: ''},
  { name: 'CSS 3', icon: 'bxl:css3', iconColor: 'logos:css-3', color: ''},
  { name: 'SASS', icon: 'cib:sass-alt', iconColor: 'logos:sass', color: ''},
  { name: 'Tailwind CSS', icon: 'bxl:tailwind-css', iconColor: 'logos:tailwindcss-icon', color: ''},
  { name: 'Bootstrap CSS', icon: 'simple-icons:bootstrap', iconColor: 'logos:bootstrap', color: ''},
  { name: 'Vuetify', icon: 'simple-icons:vuetify', iconColor: 'logos:vuetifyjs', color: ''},
  { name: 'Visual Code', icon: 'cib:visual-studio-code', iconColor: 'logos:visual-studio-code', color: ''},
  { name: 'Figma', icon: 'cib:figma', iconColor: 'logos:figma', color: ''},
  { name: 'Git', icon: 'bxl:git', iconColor: 'logos:git-icon', color: ''},
  { name: 'Github', icon: 'simple-icons:refinedgithub', iconColor: 'logos:github-octocat', color: ''},
  { name: 'Github Copilot', icon: 'simple-icons:githubcopilot', iconColor: 'simple-icons:githubcopilot', color: ''},
  { name: 'Gitlab', icon: 'bxl:gitlab', iconColor: 'logos:gitlab-icon', color: ''},
  { name: 'Bitbucket', icon: 'simple-icons:bitbucket', iconColor: 'logos:bitbucket', color: ''},
  { name: 'Digital Ocean', icon: 'bxl:digitalocean', iconColor: 'logos:digital-ocean-icon', color: ''},
  { name: 'Netlify', icon: 'cib:netlify', iconColor: 'logos:netlify-icon', color: ''},
  { name: 'NginX', icon: 'simple-icons:nginx', iconColor: 'logos:nginx', color: ''},
  { name: 'Apache', icon: 'simple-icons:apache', iconColor: 'logos:apache', color: ''},
  { name: 'insomnia', icon: 'simple-icons:insomnia', iconColor: 'logos:insomnia', color: ''},
  { name: 'Wordpress', icon: 'bxl:wordpress', iconColor: 'bxl:wordpress', color: ''},
  { name: 'Trello', icon: 'bxl:trello', iconColor: 'logos:trello', color: ''},
  { name: 'Asana', icon: 'simple-icons:asana', iconColor: 'logos:asana-icon', color: ''},
]
</script>
