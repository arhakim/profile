<template>
  <div class="custom-footer">
    <p class="copyright">
      Copyright © {{ currentYear }} <a href="https://github.com/arhakim" target="_blank">Andri Rahman Hakim</a><br>
      <a href="/andri_rahman_hakim-resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const currentYear = ref(new Date().getFullYear())

onMounted(() => {
  // Update year on mount to ensure it's always current
  currentYear.value = new Date().getFullYear()
})
</script>

<style scoped>
.custom-footer {
  border-top: 1px solid var(--vp-c-divider);
  padding: 32px;
  text-align: center;
}

.copyright {
  font-size: 14px;
  color: var(--vp-c-text-2);
  margin: 0;
}

.copyright a {
  text-decoration: none;
  transition: color 0.25s;
}

.copyright a:hover {
  color: var(--vp-c-brand-2);
}
</style>
