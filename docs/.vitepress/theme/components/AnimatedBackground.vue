<script setup lang="ts">
import { computed } from 'vue';
import { useData } from 'vitepress';

const { isDark } = useData();

// Generate arrays for dots and grid lines
const dots = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  cx: `${(i * 5 + 10) % 100}%`,
  cy: `${(i * 7 + 20) % 100}%`,
  duration: 3 + (i % 5),
  delay: i * 0.2
}));

const verticalLines = Array.from({ length: 10 }, (_, i) => i);
const horizontalLines = Array.from({ length: 10 }, (_, i) => i);
</script>

<template>
  <div class="fixed inset-0 z-0 overflow-hidden pointer-events-none">
    <svg
      class="absolute w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color: #ef4444; stop-opacity: 0.6" />
          <stop offset="100%" style="stop-color: #f97316; stop-opacity: 0.6" />
        </linearGradient>
        <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color: #f97316; stop-opacity: 0.5" />
          <stop offset="100%" style="stop-color: #ef4444; stop-opacity: 0.5" />
        </linearGradient>
        <linearGradient id="grad3" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color: #fb923c; stop-opacity: 0.4" />
          <stop offset="100%" style="stop-color: #f97316; stop-opacity: 0.4" />
        </linearGradient>
        
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <!-- Large floating circle - top right -->
      <circle
        cx="80%"
        cy="10%"
        r="300"
        fill="url(#grad1)"
        class="animate-float-1 hidden md:block"
      />

      <!-- Medium circle - left side -->
      <circle
        cx="10%"
        cy="40%"
        r="200"
        fill="url(#grad2)"
        class="animate-float-2"
      />

      <!-- Small circle - bottom right -->
      <circle
        cx="90%"
        cy="80%"
        r="150"
        fill="url(#grad3)"
        class="animate-float-3"
      />

      <!-- Floating geometric shapes -->
      <g class="animate-rotate-slow">
        <rect
          x="15%"
          y="20%"
          width="100"
          height="100"
          fill="none"
          :stroke="isDark ? '#ef4444' : '#f97316'"
          stroke-width="2"
          opacity="0.3"
        />
      </g>

      <g class="animate-rotate-reverse">
        <polygon
          points="70,60 72,65 68,65"
          fill="none"
          :stroke="isDark ? '#f97316' : '#ef4444'"
          stroke-width="2"
          opacity="0.3"
          transform="scale(30)"
        />
      </g>

      <!-- Animated dots pattern -->
      <circle
        v-for="dot in dots"
        :key="dot.id"
        :cx="dot.cx"
        :cy="dot.cy"
        r="2"
        :fill="isDark ? '#ef4444' : '#f97316'"
        class="animate-pulse-dot"
        :style="{
          animationDuration: `${dot.duration}s`,
          animationDelay: `${dot.delay}s`
        }"
      />

      <!-- Curved lines -->
      <path
        d="M 0,50 Q 25,30 50,50 T 100,50"
        fill="none"
        stroke="url(#grad1)"
        stroke-width="3"
        opacity="0.2"
        class="animate-draw-path-1"
      />

      <path
        d="M 0,70 Q 30,80 60,70 T 100,70"
        fill="none"
        stroke="url(#grad2)"
        stroke-width="2"
        opacity="0.2"
        class="animate-draw-path-2"
      />

      <!-- Grid pattern -->
      <g class="animate-grid-pulse">
        <line
          v-for="i in verticalLines"
          :key="`v-${i}`"
          :x1="`${i * 10}%`"
          y1="0%"
          :x2="`${i * 10}%`"
          y2="100%"
          :stroke="isDark ? '#ffffff' : '#000000'"
          stroke-width="1"
        />
        <line
          v-for="i in horizontalLines"
          :key="`h-${i}`"
          x1="0%"
          :y1="`${i * 10}%`"
          x2="100%"
          :y2="`${i * 10}%`"
          :stroke="isDark ? '#ffffff' : '#000000'"
          stroke-width="1"
        />
      </g>
    </svg>
  </div>
</template>

<style scoped>
@keyframes float-1 {
  0%, 100% {
    transform: scale(0.8);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.5;
  }
}

@keyframes float-2 {
  0%, 100% {
    transform: scale(1);
    opacity: 0.2;
  }
  50% {
    transform: scale(1.3);
    opacity: 0.4;
  }
}

@keyframes float-3 {
  0%, 100% {
    transform: scale(0.9);
    opacity: 0.25;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.45;
  }
}

@keyframes rotate-slow {
  0% {
    opacity: 0.1;
    transform: rotate(0deg);
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 0.1;
    transform: rotate(360deg);
  }
}

@keyframes rotate-reverse {
  0% {
    opacity: 0.15;
    transform: rotate(360deg);
  }
  50% {
    opacity: 0.35;
  }
  100% {
    opacity: 0.15;
    transform: rotate(0deg);
  }
}

@keyframes pulse-dot {
  0%, 100% {
    opacity: 0.1;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(1.5);
  }
}

@keyframes draw-path-1 {
  0%, 100% {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    opacity: 0.1;
  }
  50% {
    stroke-dashoffset: 0;
    opacity: 0.3;
  }
}

@keyframes draw-path-2 {
  0%, 100% {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    opacity: 0.15;
  }
  50% {
    stroke-dashoffset: 0;
    opacity: 0.35;
  }
}

@keyframes grid-pulse {
  0%, 100% {
    opacity: 0.03;
  }
  50% {
    opacity: 0.08;
  }
}

.animate-float-1 {
  animation: float-1 20s ease-in-out infinite;
}

.animate-float-2 {
  animation: float-2 15s ease-in-out 2s infinite;
}

.animate-float-3 {
  animation: float-3 18s ease-in-out 4s infinite;
}

.animate-rotate-slow {
  transform-origin: center;
  animation: rotate-slow 30s linear infinite;
}

.animate-rotate-reverse {
  transform-origin: center;
  animation: rotate-reverse 25s linear infinite;
}

.animate-pulse-dot {
  animation: pulse-dot ease-in-out infinite;
}

.animate-draw-path-1 {
  animation: draw-path-1 8s ease-in-out infinite;
}

.animate-draw-path-2 {
  animation: draw-path-2 10s ease-in-out 2s infinite;
}

.animate-grid-pulse {
  animation: grid-pulse 5s ease-in-out infinite;
}
</style>
