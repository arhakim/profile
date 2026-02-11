<template>
	<div>
		<div class="divider divider-start">{{ title }}</div>
		<Badge v-if="isConfidential" type="tip">{{ confidentialText }}</Badge>
		<Badge v-else v-for="stack in stacks" :text="stack" type="info" />
	</div>
</template>

<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()

defineProps({
	isConfidential: {
		type: Boolean,
		default: false
	},
	stacks: {
		type: Array,
		default: () => []
	}
})

const currentLang = lang.value === 'id' ? 'id' : 'en'
const titleTexts = {
	en: 'Tech Stack:',
	id: 'Teknologi yang digunakan:'
}
const title = computed(() => titleTexts[currentLang])

const confidentialTexts = {
	en: 'Confidential',
	id: 'Rahasia'
}
const confidentialText = computed(() => confidentialTexts[currentLang])
</script>