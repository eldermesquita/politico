import { defineStore } from 'pinia'
import api from '../http'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const error = ref('')
  const router = useRouter()

  async function login(email, password) {
    error.value = ''
    try {
      const response = await api.post('/login', { email, password })
      user.value = response.data.usuario
      router.push({ name: 'Home' }) // ajuste para sua rota
    } catch (err) {
      error.value = err.response?.data?.message || 'Erro ao autenticar'
    }
  }

  async function logout() {
    try {
      await api.post('/logout')
      user.value = null
      router.push({ name: 'Login' })
    } catch (err) {
      error.value = err.response?.data?.message || 'Erro ao sair'
    }
  }

  return { user, error, login, logout }
})
/* 
export const useAuthStore = defineStore('auth', {
    state: () => ({
        codeVerifier: null,
        state: null,
        accessToken: null,
        refreshToken: null,
        username: null,
        nome: null,
        email: null,
        pessoaId: null,
        interno: null,
        unidadeGestora: null,
    }),
    actions: {
        setPkceCodes(codeVerifier, state) {
            this.codeVerifier = codeVerifier
            this.state = state
        },
        setAccessToken(accessToken) {
            this.accessToken = accessToken
        },
        setRefreshToken(refreshToken) {
            this.refreshToken = refreshToken
        },
        setUser(customUser) {
            this.username = customUser.username
            this.nome = customUser.nome
            this.email = customUser.email
            this.pessoaId = customUser.pessoaId
            this.interno = customUser.interno
            this.unidadeGestora = customUser.unidadeGestora
        },
        clearPkceCodes() {
            this.codeVerifier = null
            this.codeChallenge = null
            this.state = null
        },
    },
    persist: {
        storage: localStorage,
    },
})
 */
