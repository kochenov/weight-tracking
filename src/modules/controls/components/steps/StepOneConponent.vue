<template>
  <div class="column q-py-lg">
    <q-select
      class="col"
      filled
      v-model="controlStore.currentAnimal"
      use-input
      input-debounce="0"
      label="Выбирите тип животного для расчётов"
      :options="options"
      @filter="filterFn"
      behavior="dialog"
      transition-show="jump-up"
      :bottom-slots="errorInputCurrentAnilals"
      transition-hide="flip-down"
    >
      <template v-slot:hint>
        <span class="text-red-14"
          >Для продолжения нужно обязательно выбрать животное
        </span></template
      >
      <template v-slot:no-option>
        <q-item>
          <q-item-section class="text-grey"> Результата нет</q-item-section>
        </q-item>
      </template>
    </q-select>
    <q-btn
      color="cyan-10"
      class="q-ma-md full-width"
      icon="add"
      @click="addAnimal = true"
    >
      Добавить животное
    </q-btn>
  </div>
  <q-dialog v-model="addAnimal" persistent>
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Название животного</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-form class="column">
          <q-input
            dense
            v-model="addNewAnimal.label"
            autofocus
            placeholder="Пример: Гуси"
            hint="Название животного во множественном числе"
          />
          <q-input
            dense
            v-model="addNewAnimal.word1"
            placeholder="Пример: Гусь"
            hint="Как будет писаться животное: Один ...?"
          />
          <q-input
            dense
            placeholder="Пример: Гуся"
            v-model="addNewAnimal.word2"
            hint="Как будет писаться животное: Два ...?"
          />
          <q-input
            dense
            v-model="addNewAnimal.word5"
            placeholder="Пример: Гусей"
            hint="Как будет писаться животное: Пять ...?"
          />
        </q-form>
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Отмена" v-close-popup />
        <q-btn
          flat
          @click="addAnimalAction()"
          label="Сохранить"
          v-close-popup
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
  <q-stepper-navigation>
    <q-btn
      @click="!controlStore.currentAnimal ? isError() : (controlStore.step = 2)"
      color="primary"
      label="Продолжить"
      class="q-ml-sm"
    >
    </q-btn>
  </q-stepper-navigation>
</template>

<script setup>
import { Notify } from "quasar";
import { useAuthStore, useUserStore, useControlStore } from "src/stores/all";
import { onMounted, ref, watch } from "vue";

const controlStore = useControlStore();
const userStore = useUserStore();
const authStore = useAuthStore();

const openFab = ref(false);
const addAnimal = ref(false); // Модель диалогового окна добавления нового животного в базу
const addNewAnimal = ref({}); // Подготовка данных к сохранению нового животного
/**
 * Опции компонента select
 */
const stringOptions = ref(controlStore.allAnimals);
const options = ref(stringOptions.value);
////
const errorInputCurrentAnilals = ref(false);
const filterFn = (val, update) => {
  if (val === "") {
    update(() => {
      options.value = stringOptions.value;
    });
    return;
  }
  update(() => {
    const needle = val.toLowerCase();
    options.value = stringOptions.value.filter(
      (v) => v.label.toLowerCase().indexOf(needle) > -1
    );
  });
};

// Добавление в БД нового животного
const addAnimalAction = async () => {
  if (
    addNewAnimal.value &&
    addNewAnimal.value.label &&
    addNewAnimal.value.word1 &&
    addNewAnimal.value.word2 &&
    addNewAnimal.value.word5
  ) {
    await controlStore.addAnimals(addNewAnimal.value);
    addNewAnimal.value = {};
  }
};

onMounted(async () => {
  try {
    if (controlStore.allAnimals.length === 0) {
      await controlStore.getSistemAnimals();
    }
  } catch (error) {
    console.log(error);
  }
});

watch(
  () => controlStore.currentAnimal,
  () => {
    controlStore.step = 2;
    Notify.create({
      message: "Для расчётов выбраны - " + controlStore.currentAnimal.label,
      color: "positive",
    });
  }
);

// Проверка на ошибки выбора животного
const isError = () => {
  Notify.create({
    message: "Для продолжения нужно выбирить животное из списка",
    color: "red",
  });
  errorInputCurrentAnilals.value = true;
};
</script>

<style lang="scss" scoped></style>
