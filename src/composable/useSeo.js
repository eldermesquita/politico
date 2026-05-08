
const SITE_NAME = 'Victor Carvalho Advocacia'
const SITE_URL = 'http://localhost:5173'
const DEFAULT_IMAGE = `/src/assets/img/imagem-padrao.png`
const DEFAULT_DESCRIPTION = 'Sociedade Unipessoal de Advocacia — Defesa Criminal, Previdenciário, Trabalhista e Cível em Roraima.'

function setMeta(attr, key, value) {
  if (!value) return
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}

function setCanonical(url) {
  let el = document.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', url)
}

/**
 * Atualiza todas as meta tags de SEO com base na rota atual.
 * @param {import('vue-router').RouteLocationNormalized} route
 */
export function atualizarSeo(route) {
  const meta = route.meta || {}
  const titulo = meta.titulo ? `${meta.titulo} | ${SITE_NAME}` : SITE_NAME
  const descricao = meta.descricao || DEFAULT_DESCRIPTION
  const url = `${SITE_URL}${route.fullPath}`
  const imagem =  DEFAULT_IMAGE

  // Title
  document.title = titulo

  // Standard meta
  setMeta('name', 'description', descricao)
  setMeta('name', 'robots', meta.exibir === false ? 'noindex, nofollow' : 'index, follow')

  // Open Graph
  setMeta('property', 'og:title', titulo)
  setMeta('property', 'og:description', descricao)
  setMeta('property', 'og:url', url)
  setMeta('property', 'og:image', imagem)
  setMeta('property', 'og:image:alt', `Logo ${SITE_NAME}`)
  setMeta('property', 'og:type', route.path === '/' ? 'website' : 'article')
  setMeta('property', 'og:site_name', SITE_NAME)
  setMeta('property', 'og:locale', 'pt_BR')

  /*<meta property="og:title" content="Título do seu post">
    <meta property="og:description" content="Descrição do conteúdo">
    <meta property="og:image" content="URL_DA_IMAGEM">
    <meta property="og:url" content="URL_DO_POST">*/
  // Canonical
  setCanonical(url)
}
