import {ref, onMounted, onUnmounted} from 'vue'
export function useScroll() {
  const scrollY = ref(0)
  const scrollProgress = ref(0)
  const isScrolled = ref(false)
  const activeSection = ref('hero')

  const sections = ['hero', 'sobre', 'propostas', 'videos', 'noticias', 'trajetoria', 'contato']

  const handleScroll = () => {
    scrollY.value = window.scrollY
    isScrolled.value = window.scrollY > 80

    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    scrollProgress.value = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0

    // Detect active section
    for (const id of sections) {
      const el = document.getElementById(id)
      if (el) {
        const rect = el.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          activeSection.value = id
          break
        }
      }
    }
  }

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({behavior: 'smooth', block: 'start'})
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, {passive: true})
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {scrollY, scrollProgress, isScrolled, activeSection, scrollTo}
}
