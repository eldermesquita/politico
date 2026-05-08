export function useContato() {
  const whatsappNumber = '5595981083779'
  const WHATSAPP_NUMBER = '5595999999999'
  const defaultMessage = 'Olá, gostaria de mais informações.'

  const sendMessage = (message = '') => {
    const encoded = encodeURIComponent(message)
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const openContact = () => {
    sendMessage('Olá, Bruno! Quero saber mais sobre sua candidatura a Deputado Estadual por Roraima em 2026.')
  }

  const openSupport = () => {
    sendMessage('Olá, Bruno! Quero fazer parte do seu movimento e apoiar sua candidatura!')
  }

  const openVolunteer = () => {
    sendMessage('Olá! Tenho interesse em ser voluntário na campanha do Bruno Dantas para Deputado Estadual de Roraima.')
  }

  const sendCustom = (name, city, interest) => {
    const msg = `Olá, Bruno! Me chamo ${name}, sou de ${city} e gostaria de: ${interest}. Quero fazer parte do movimento!`
    sendMessage(msg)
  }

  const getWhatsappLink = (message = defaultMessage) => {
    const encodedMessage = encodeURIComponent(message)
    return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
  }

  const getCompartilharWhatsapp = (url, titulo) => {
    const texto = encodeURIComponent(`${titulo}\n\n${url}`)
    return `https://wa.me/?text=${texto}`
  }

  const getCompartilharFacebook = (url) => {
    return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
  }

  const getCompartilharTwitter = (url, titulo) => {
    return `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(titulo)}`
  }

  const getCompartilharInstagram = () => {
    return `https://www.instagram.com/`
  }

  const openWhatsapp = (message = defaultMessage) => {
    window.open(getWhatsappLink(message), '_blank')
  }

  return {
    whatsappNumber,
    getWhatsappLink,
    getCompartilharWhatsapp,
    getCompartilharFacebook,
    getCompartilharTwitter,
    getCompartilharInstagram,
    openWhatsapp,
    sendMessage,
    openContact,
    openSupport,
    openVolunteer,
    sendCustom,
    WHATSAPP_NUMBER,
  }
}
