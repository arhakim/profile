---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  text: Hi 👋 <br>I am Andri.
  tagline: Full-stack web developer focused on creating reliable, scalable solutions through clean coding practices and user-friendly design.

  image:
    src: /logo.png
    alt: Arhakim
---

<div class="flex flex-col lg:flex-row items-center gap-4 mb-10">
  <SocialLinks />
  <AvailabilityBadge />
</div>

<TechStack title="Experienced using:" />

<script setup>
import { onBeforeUnmount, onMounted, nextTick } from "vue"
import { useRouter } from "vitepress"
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const router = useRouter()
let text
let tagline
let timeline

function VPImageAnimation() {
  let imgContainer = document.querySelector(".VPHome");
  if (!imgContainer) return; // Exit early if not on home page
  
  gsap.set(".VPHome", { perspective: 650 });
  const outerRX = gsap.quickTo(".image-container", "rotationX", { ease: "power3" });
  const outerRY = gsap.quickTo(".image-container", "rotationY", { ease: "power3" });
  const innerX = gsap.quickTo(".VPImage.image-src", "x", { ease: "power3" });
  const innerY = gsap.quickTo(".VPImage.image-src", "y", { ease: "power3" });

  imgContainer.addEventListener("pointermove", (e) => {
    outerRX(gsap.utils.interpolate(15, -15, e.y / window.innerHeight));
    outerRY(gsap.utils.interpolate(-15, 15, e.x / window.innerWidth));
    innerX(gsap.utils.interpolate(-30, 30, e.x / window.innerWidth));
    innerY(gsap.utils.interpolate(-30, 30, e.y / window.innerHeight));
  });

  imgContainer.addEventListener("pointerleave", (e) => {
    outerRX(0);
    outerRY(0);
    innerX(0);
    innerY(0);
  });
}

function revertTextAnimations() {
  if (timeline) timeline.kill()
  if (text) text.revert()
  if (tagline) tagline.revert()
  timeline = undefined
  text = undefined
  tagline = undefined
}

async function runTextAnimations(){
  const heading = document.querySelector(".heading .text");
  const taglineEl = document.querySelector(".tagline");
  if (!heading || !taglineEl) return; // Exit early if not on home page

  // Wrap the wave emoji if it exists
  if (heading.innerHTML.includes('👋')) {
    heading.innerHTML = heading.innerHTML.replace('👋', '<span class="wave-emoji">👋</span>');
  }

  if (document?.fonts?.ready) {
    await document.fonts.ready
  }

  text = SplitText.create(".heading .text", { type: "chars,words,lines" })
  tagline = SplitText.create(".tagline", { type: "chars,words,lines" })

  timeline = gsap.timeline()
  .from(text.chars, {
    x: 150,
    opacity: 0,
    duration: 0.7,
    ease: "power4",
    stagger: 0.04
  })
  .from(tagline.words, {
    y: -100,
    opacity: 0,
    rotation: "random(-80, 80)",
    duration: 0.7, 
    ease: "back",
    stagger: 0.15
  })
}

onMounted(() => {
  VPImageAnimation()
  runTextAnimations()

  router.onBeforeRouteChange = () => {
    revertTextAnimations()
  }

  router.onAfterRouteChange = async () => {
    await nextTick()
    await runTextAnimations()
  }

  onBeforeUnmount(() => {
    revertTextAnimations()
  })
})
</script>

<style>
.wave-emoji {
  display: inline-block;
  animation: wave 2s ease-in-out infinite;
  transform-origin: 70% 70%;
}

@keyframes wave {
  0%, 100% {
    transform: rotate(0deg);
  }
  10%, 30% {
    transform: rotate(14deg);
  }
  20%, 40% {
    transform: rotate(-8deg);
  }
  50%, 60% {
    transform: rotate(14deg);
  }
  70%, 80% {
    transform: rotate(-4deg);
  }
  90% {
    transform: rotate(10deg);
  }
}
</style>
