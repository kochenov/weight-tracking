<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Контроль веса животных </q-toolbar-title>
        <q-space />
        <q-separator v-if="!authStore.user" dark vertical />
        <q-btn v-if="!authStore.user" stretch flat to="/login" label="Вход" />
        <q-separator dark vertical />
        <q-btn
          stretch
          v-if="!authStore.user"
          flat
          to="/registration"
          label="Регистрация"
        />
        <q-btn
          stretch
          v-if="authStore.user"
          flat
          @click="authStore.logout()"
          label="Выход"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useAuthStore } from "src/stores/all";
import { ref } from "vue";

const leftDrawerOpen = ref(false);
const authStore = useAuthStore();

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>
