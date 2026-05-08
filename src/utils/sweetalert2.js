// help.js
import Swal from '@/utils/sweetalert2.js'
import toastr from 'toastr'
import NProgress from 'nprogress'
import 'toastr/build/toastr.min.css'
import 'nprogress/nprogress.css'

toastr.options = {
    showConfirmButton: false,
    closeButton: true,
    debug: false,
    newestOnTop: true,
    progressBar: true,
    progressClass: "toast-progress",
    positionClass: "toast-bottom-right",
    rtl: false,
    tapToDismiss: true,
    preventDuplicates: false,
    onclick: null,
    showDuration: 300,
    hideDuration: 300,
    timeOut: 7000,
    timer: 5000,
    extendedTimeOut: 1000,
    hideEasing: "linear",
    hideMethod: "fadeOut",
    showEasing: "swing",
    showMethod: "fadeIn",
};
export function showAlert({ title = '', text = '', icon = 'info', confirmButtonText = 'OK' } = {}) {
  return Swal.fire({ title, text, icon, confirmButtonText })
}

export function showConfirm({
  text='Você tem certeza que deseja remover',
  title = 'Confirma?',
  confirmButtonText = 'Sim',
  cancelButtonText = 'Cancelar',
} = {}) {
         const swalWithButtons = Swal.mixin({
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            buttonsStyling: true,
        });

        return swalWithButtons.fire({
            title,
            text,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText,
            cancelButtonText,
            reverseButtons: true,
        });
 /*  return Swal.fire({
    title,
    text,
    icon,
    showCancelButton: true,
    confirmButtonText,
    cancelButtonText,
  }) */
}


export function toastSuccess(message, title ) {
  toastr.success(message, title)
}

export function toastError(message, title = 'Erro') {
  toastr.error(message, title)
}

export function toastInfo(message, title = 'Info') {
  toastr.info(message, title)
}

export function toastWarning(message, title = 'Atenção') {
  toastr.warning(message, title)
}

// NProgress controls
export function startLoading() {
  NProgress.start()
}

export function doneLoading() {
  NProgress.done()
}

export function setLoadingProgress(percent) {
  NProgress.set(percent) // percent: 0.0 - 1.0
}
