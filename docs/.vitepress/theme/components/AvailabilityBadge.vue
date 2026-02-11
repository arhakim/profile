<template>
  <div class="self-center flex-col lg:flex-row text-center md:text-left">
    <a :href="contactLink">
      <Badge type="danger">
        <span class="status status-error animate-ping mr-2"></span>
        {{ badgeText }}
      </Badge>
    </a>
    &nbsp;
    <div class="text-rotate duration-6000 w-full md:w-auto text-center md:text-left">
      <div>
        <div 
          v-for="available in displayAvailabilities"
          :key="available"
          class="w-full md:w-auto text-center md:text-left"
        >
          {{ available }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()

const props = defineProps({
  badgeText: {
    type: String,
    default: null
  },
  contactLink: {
    type: String,
    default: '/contact'
  },
  availabilities: {
    type: Array,
    default: null
  }
})

// Translations
const translations = {
  en: {
    badge: 'Available for new opportunities',
    availabilities: ['Freelance', 'Part-time', 'Full-time']
  },
  id: {
    badge: 'Tersedia untuk peluang baru',
    availabilities: ['Freelance', 'Paruh waktu', 'Penuh waktu']
  }
}

const currentLang = computed(() => lang.value === 'id' ? 'id' : 'en')

const badgeText = computed(() => {
  return props.badgeText || translations[currentLang.value].badge
})

const contactLink = computed(() => {
	if (currentLang.value === 'id') {
		return '/id/' + (props.contactLink || 'contact')
	}
	return props.contactLink
})

const displayAvailabilities = computed(() => {
  return props.availabilities || translations[currentLang.value].availabilities
})
</script>
