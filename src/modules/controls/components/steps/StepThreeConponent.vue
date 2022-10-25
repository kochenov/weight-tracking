<template>
  <div class="q-pa-md flex flex-center">
    <q-card class="my-card text-white">
      <q-card-section>
        <div class="text-h5 text-center text-green-11">
          {{ controlStore.currentAnimal.label }}
        </div>
        <q-banner
          inline-actions
          rounded
          class="bg-orange text-white q-ma-md text-center"
        >
          <div class="text-weight-bold q-pb-xs">Партия</div>
          <q-separator dark />
          {{ controlStore.currentPart.label }}
        </q-banner>
        <div class="text-subtitle2 q-pa-sm text-center">
          Средний вес на {{ controlStore.oldAnimals }}-й день жизни
        </div>
        <div class="text-subtitle1 text-center q-pa-sm">
          Количество: {{ controlStore.countAnimals }} шт.
        </div>
      </q-card-section>
      <q-separator dark />
      <q-card-section>
        <div class="text-h6 text-center q-my-md text-yellow-12">
          {{ controlStore.midleVes }} <br />грамм
        </div>
      </q-card-section>

      <q-separator dark />

      <q-card-actions class="flex flex-center">
        <q-btn class="save-btn" flat @click="saveResultAction()"
          >Сохранить результат</q-btn
        >
      </q-card-actions>
    </q-card>
  </div>
  <q-stepper-navigation>
    <q-btn color="primary" @click="isError()" label="График роста" />
    <q-btn
      flat
      @click="controlStore.step = 2"
      color="primary"
      label="Назад"
      class="q-ml-sm"
    />
  </q-stepper-navigation>
</template>

<script setup>
import { Notify } from "quasar";
import { useControlStore } from "src/stores/all";
import { ref } from "vue";

const controlStore = useControlStore(); // Хранилище расчётов

const saveResult = ref(false);

const saveResultAction = async () => {
  try {
    await controlStore.addHistoryVes();
    Notify.create({
      message: "Результат расчётов успешно сохранён!",
      color: "green",
    });
    controlStore.step = 4;
    controlStore.tempOnResult = {
      animal: controlStore.currentAnimal,
      part: controlStore.currentPart,
    };

    controlStore.currentAnimal = null;
    controlStore.currentPart = null;
    controlStore.oldAnimals = null;
    controlStore.countAnimals = null;
    controlStore.allVes = [];
    controlStore.midleVes = null;
  } catch (error) {
    console.log(error);
  }
};

const isError = () => {
  if (!saveResult.value) {
    Notify.create({
      message: "Для продолжения нужно сохранить результат расчётов",
      color: "red",
    });
  } else if (saveResult.value) {
    controlStore.step = 4;
  }
};
</script>

<style lang="scss" scoped>
.my-card {
  width: 310px;
  background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);
}
</style>
