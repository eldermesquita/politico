import { defineStore } from 'pinia'
import Swal from 'sweetalert2'
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'

toastr.options = {
  showConfirmButton: false,
  closeButton: true,
  debug: false,
  newestOnTop: true,
  progressBar: true,
  progressClass: 'toast-progress',
  positionClass: 'toast-bottom-right',
  rtl: false,
  tapToDismiss: true,
  preventDuplicates: false,
  onclick: null,
  showDuration: 300,
  hideDuration: 300,
  timeOut: 7000,
  timer: 5000,
  extendedTimeOut: 1000,
  hideEasing: 'linear',
  hideMethod: 'fadeOut',
  showEasing: 'swing',
  showMethod: 'fadeIn',
}

// Definindo o store para notificações
export const useNotificacaoStore = defineStore('notificacao', {
  state: () => ({
    notificacaoAtiva: null,
  }),

  actions: {
    // Função para exibir notificações com SweetAlert2 (Modal)
    exibirNotificacaoModal(titulo, mensagem, tipo = 'error') {
      Swal.fire({
        title: titulo,
        text: mensagem,
        icon: tipo, // 'success', 'error', 'warning', 'info'
        confirmButtonText: 'Ok',
      })
    },

    // Função para exibir notificações Toast com Toastr
    sucesso(mensagem, titulo) {
      toastr.success(mensagem, titulo)
    },
    erros(mensagem, titulo) {
      toastr.error(mensagem, titulo)
    },
    aviso(mensagem, titulo) {
      toastr.warning(mensagem, titulo)
    },

    informacao(mensagem, titulo) {
      toastr.info(mensagem, titulo)
    },

    // Função para exibir uma notificação com Vuetify (snackbar)
    exibirNotificacaoSnackbar(mensagem, tipo = 'success') {
      const snackbar = this.$root.$refs.snackbar
      snackbar.show({
        message: mensagem,
        color: tipo === 'success' ? 'green' : tipo === 'error' ? 'red' : 'orange',
        timeout: 3000,
      })
    },
  },
})
