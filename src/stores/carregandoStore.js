import {defineStore} from 'pinia'

export const useCarregandoStore = defineStore('loading', {
  state: () => ({
    carregando: false,
  }),
  actions: {

    abrir() {
      this.carregando = true
    },

    fechar() {
      this.carregando = false
    },
    setCarregando(_value) {
      this.carregando = _value
    },

  },
})
