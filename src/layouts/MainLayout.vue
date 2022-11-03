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
      <q-list padding>
        <q-item-label header>Навигация</q-item-label>

        <q-item-label header v-ripple>
          <q-list bordered separator>
            <q-item to="/" clickable v-ripple exact>
              <q-item-section>Главная</q-item-section>
            </q-item>

            <q-item to="/result-all" clickable v-ripple>
              <q-item-section>
                <q-item-label>Список расчётов</q-item-label>
                <q-item-label caption>Контроль веса животных</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-item-label>
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

const leftDrawerOpen = ref(true);
const authStore = useAuthStore();

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>
