import {primeiraLetraMaiuscula} from '@/utils/funcoes'

const publico = {
  path: '/',
  name: 'Layouts',
  component: () => import('@/components/layouts/site/IndexPublico.vue'),
  meta: {
    requiresAuth: false,
    public: true,
  },
  children: [
    /* ================= HOME ================= */
    {
      path: '/',
      name: 'Início',
      component: () => import('@/views/Inicio.vue'),
      meta: {
        titulo: 'Início',
        icone: 'pi pi-fw pi-home',
        exibir: true,
      },
    },
    {
      path: 'areas-de-atuacao',
      name: 'Áreas de atuação',
      meta: {
        titulo: 'Áreas de atuação',
        exibir: true,
      },
      children: [
        {
          path: ':id/:titulo',
          name: 'PAGINA',
          component: () => import('@/views/Pagina.vue'),
          props: (route) => ({
            id: Number(route.params.id),
            titulo: route.params.titulo,
          }),
          beforeEnter: (to) => {
            to.meta.titulo = primeiraLetraMaiuscula(to.params.titulo)
          },
          meta: {
            titulo: 'PÁGINA DE CONTEUDO',
            descricao: "Atuação na defesa e acompanhamento de processos criminais, oferecendo assessoria jurídica em inquéritos policiais, audiências de custódia, habeas corpus, recursos e demais medidas judiciais. Compromisso com a ampla defesa, o contraditório e a garantia dos direitos fundamentais do cliente.",
            icone: "fi fi-sr-scale",
            exibir: false
          }
        },

      ],
    },
    {
      path: 'noticias',
      name: 'Noticias',
      component: () => import('@/views/Noticias.vue'),
      meta: {
        titulo: 'Artigos Blog',
        exibir: true,
      },
    },
    {
      path: 'noticia/:id/:titulo',
      name: 'Noticia',
      component: () => import('@/views/Noticia.vue'),
      props: (route) => ({
        id: route.params.id,
        titulo: route.params.titulo,
      }),
      beforeEnter: (to) => {
        to.meta.titulo = primeiraLetraMaiuscula(to.params.titulo)
        },
      meta: {
        titulo: 'Artigos Blog',
        descricao: "Atuação na defesa e acompanhamento de processos criminais, oferecendo assessoria jurídica em inquéritos policiais, audiências de custódia, habeas corpus, recursos e demais medidas judiciais. Compromisso com a ampla defesa, o contraditório e a garantia dos direitos fundamentais do cliente.",
        icone: "fi fi-sr-scale",
        exibir: false
      }
    },
    {
      path: 'advogados',
      name: 'Equipe',
      component: () => import('@/views/Advogados.vue'),
      meta: {
        titulo: 'Equipe',
        exibir: false,
      },
    },
    {
      path: 'quem-somos',
      name: 'Quem Somos',
      component: () => import('@/views/Contato.vue'),
      meta: {
        titulo: 'Quem Somos',
        exibir: true,
      },
    },
    /* ================= ERROS ================= */
    {
      path: '403',
      name: 'Acesso Negado',
      component: () => import('@/views/403.vue'),
      meta: {titulo: 'Acesso Negado', exibir: false},
    },
    {
      path: ':pathMatch(.*)*',
      name: '404',
      component: () => import('@/views/404.vue'),
      meta: {titulo: 'Página não encontrada', exibir: false},
    },
  ],
}

export default publico
