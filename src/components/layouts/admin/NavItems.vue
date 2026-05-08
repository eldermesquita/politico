<script setup>
import VerticalNavSectionTitle from '@/@layouts/admin/VerticalNavSectionTitle.vue'
import VerticalNavGroup from '@layouts/admin/VerticalNavGroup.vue'
import VerticalNavLink from '@layouts/admin/VerticalNavLink.vue'

import {computed} from 'vue'
import {usePage} from '@inertiajs/vue3'

const page = usePage()
const autenticado = computed(() => page.props.auth?.loggedIn)
</script>

<template>
    <VerticalNavSectionTitle :item="{
    heading: 'Painel Administrativo',
  }"/>
    <VerticalNavGroup :item="{
    title: 'Gerências',
    icon: 'ri-home-smile-line',
  }">

        <VerticalNavLink :item="{
      title: 'Certificados',
      to: '/certificados',

    }"/>
    </VerticalNavGroup>
    <VerticalNavSectionTitle :item="{
    heading: '',
  }"/>

    <VerticalNavLink v-if="!autenticado" :item="{
    title: 'Login',
    icon: 'ri-login-box-line',
    to: '/login',
  }"/>
    <VerticalNavLink v-if="!autenticado" :item="{
    title: 'Register',
    icon: 'ri-user-add-line',
    to: '/register',
  }"/>


    <VerticalNavLink v-if="autenticado" :item="{
    title: 'Sair',
    icon: 'ri-logout-box-r-line',
    to: '/logout',

  }"/>
    <VerticalNavSectionTitle :item="{
    heading: 'Certificados',
  }"/>


    <VerticalNavLink :item="{
    title: 'Agenda',
    icon: 'ri-calendar-2-line',
    to: '/agenda/adicionar',
  }"/>

    <VerticalNavLink :item="{
    title: 'Autenticar ',
    icon: 'ri-qr-code-line',
    to: '/autenticar',
  }"/>

</template>
