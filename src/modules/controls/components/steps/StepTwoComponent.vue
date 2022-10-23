<template>
  <div>
    <div
      v-if="!controlStore.currentPart"
      class="q-gutter-md row items-start wrap q-my-lg"
    >
      <div class="col">
        <q-select
          class="col"
          filled
          v-model="controlStore.currentPart"
          use-input
          input-debounce="0"
          label="Выбирите партию животных, вес которых уже отслеживаете"
          :options="options"
          @filter="filterFn"
          behavior="dialog"
          bottom-slots
        >
          <template v-slot:hint>
            Если за сезон купили несколько партий животных, то лучше им дать
            названия
          </template>
          <template v-slot:no-option>
            <q-item>
              <q-item-section class="text-grey"> No results </q-item-section>
            </q-item>
          </template>
        </q-select>
      </div>
      <div class="col-2">
        <q-btn
          color="cyan-10"
          @click="addPartForm = true"
          class="full-width"
          size="lg"
        >
          <q-icon name="add_circle_outline" size="md" />

          <q-tooltip transition-show="flip-right" transition-hide="flip-left">
            добавить новую партию
          </q-tooltip>
        </q-btn>
      </div>
      <q-dialog v-model="addPartForm" persistent>
        <q-card style="min-width: 300px">
          <q-card-section>
            <div class="text-h6">Добавить партию животных</div>
          </q-card-section>

          <q-card-section class="q-pt-none q-px-sm">
            <q-input
              class="q-pa-sm"
              label="Название новой партии"
              v-model="part.label"
              autofocus
              :rules="[(val) => !!val || 'Поле нужно заполнить']"
            />
            <q-input
              class="q-pa-sm"
              label="Краткое описание партии"
              placeholder="Купил животных в мае 2022 года."
              autogrow
              v-model="part.description"
            />
          </q-card-section>

          <q-card-actions align="right" class="text-primary">
            <q-btn flat label="Отмена" v-close-popup />
            <q-btn flat label="Добавить" @click="addPart()" />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>

    <div class="q-my-lg">
      <div v-if="controlStore.currentPart && !tableListVesAnimals" class="">
        <q-form @submit="confirm = true">
          <div class="q-gutter-md row items-start wrap">
            <q-input
              v-model="controlStore.countAnimals"
              ref="inputRef"
              class="col"
              label="Введите количество животных"
              type="number"
              min="1"
              :rules="[(val) => val > 0 || 'Поле не должно быть пустым']"
            />
            <q-input
              v-model="controlStore.oldAnimals"
              ref="inputRef"
              label="Возраст животного в днях"
              type="number"
              class="col"
              min="1"
              :rules="[(val) => val > 0 || 'Поле не должно быть пустым']"
            />
          </div>
          <div class="q-gutter-md q-mt-sm row wrap">
            <q-btn color="cyan-10" type="submit" class="col">
              Ввод веса животных
            </q-btn>
          </div>
        </q-form>
        <q-dialog v-model="confirm" persistent>
          <q-card class="">
            <q-card-section class="row items-center q-pb-none">
              <div class="text-weight-bold q-ml-sm">
                Ввести средний вес животных или вес каждого по отдельности?
              </div>
              <q-space />
              <q-btn icon="close" flat round dense v-close-popup />
            </q-card-section>

            <q-card-section class="row items-center">
              <span class="q-mx-sm">
                При вводе веса каждого животного, аналитика будет более полной,
                чем если введёте средний вес сразу.
              </span>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn
                flat
                @click="dialogStatusFormAddMidVes = true"
                label="Cредний вес"
                color="primary"
                v-close-popup
              />
              <q-btn
                flat
                @click="inputVes()"
                label="Вес каждого"
                color="primary"
                v-close-popup
              />
            </q-card-actions>
          </q-card>
        </q-dialog>
        <!-- Вес каждого животного -->
        <q-dialog v-model="vesOff" persistent>
          <q-card style="min-width: 350px">
            <q-card-section>
              <div class="text-h6">
                Введите вес {{ currentVes }}-го животного
              </div>
            </q-card-section>
            <q-form @submit="addVes()">
              <q-card-section class="q-pt-none">
                <q-input
                  dense
                  type="number"
                  min="10"
                  suffix="ГРАММ"
                  prefix="ВЕС"
                  v-model="ves"
                  :rules="[(val) => val > 0 || 'Поле не должно быть пустым']"
                  autofocus
                />
              </q-card-section>

              <q-card-actions align="right" class="text-primary">
                <q-btn flat label="Отмена" v-close-popup />
                <q-btn flat type="submit" label="Ввод" />
              </q-card-actions>
            </q-form>
          </q-card>
        </q-dialog>

        <!-- Ввести средний вес -->
        <q-dialog v-model="dialogStatusFormAddMidVes" persistent>
          <q-card style="min-width: 350px">
            <q-card-section>
              <div class="text-h6">
                Введите средний вес {{ controlStore.currentAnimal.word5 }}
              </div>
            </q-card-section>
            <q-form @submit="addMidVes()">
              <q-card-section class="q-pt-none">
                <q-input
                  dense
                  type="number"
                  min="10"
                  suffix="ГРАММ"
                  prefix="ВЕС"
                  v-model="controlStore.midleVes"
                  :rules="[(val) => val > 0 || 'Поле не должно быть пустым']"
                  autofocus
                />
              </q-card-section>

              <q-card-actions align="right" class="text-primary">
                <q-btn flat label="Отмена" v-close-popup />
                <q-btn flat type="submit" label="Ввод" />
              </q-card-actions>
            </q-form>
          </q-card>
        </q-dialog>
      </div>
    </div>
  </div>
  <div>
    <div
      v-if="
        tableListVesAnimals &&
        controlStore.allVes &&
        controlStore.allVes.length > 0
      "
      class="q-pa-md"
    >
      <q-table
        title="Сводная таблица по весу на текущую сессию расчёта"
        :rows="rows"
        :columns="columns"
        row-key="name"
      />
      <q-btn
        @click="
          tableListVesAnimals = false;
          controlStore.allVes = [];
          currentVes = 1;
          controlStore.midleVes = null;
        "
        color="red-5"
        label="Сбросить"
        class="q-my-md full-width"
      />
    </div>
  </div>
  <q-stepper-navigation>
    <q-btn color="primary" label="Продолжить" @click="isError()"> </q-btn>

    <q-btn
      flat
      @click="controlStore.step = 1"
      color="primary"
      label="Назад"
      class="q-ml-sm"
    />
  </q-stepper-navigation>
</template>

<script setup>
import { Notify } from "quasar";
import { useControlStore } from "src/stores/all";
import { onMounted, ref } from "vue";
const controlStore = useControlStore();

/**
 * Модальные окна
 */
const dialogStatusFormAddMidVes = ref(false);
const confirm = ref(false); // выбор ввода веса (сред.вес / вес всех)
/**
 * Вес промежуточные расчёты
 */
const ves = ref(10); // Вес текущего животного
const vesOff = ref(false);
const currentVes = ref(1); // Номер текущего животного

// таблица
const tableListVesAnimals = ref(false);
const rows = ref(controlStore.allVes);
const columns = [
  {
    name: "id",
    required: true,
    label: "Номер",
    align: "left",
    field: (row) => row.id,
    format: (val) => `${val}`,
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: "ves",
    align: "center",
    label: "Вес",
    field: "ves",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
];

/**
 * Добавление новой партии
 */
const addPartForm = ref(false);
const part = ref({}); // промежуточные данные новой партии

/**
 * Опции компонента select
 */
const stringOptions = ref(null);
const options = ref(stringOptions.value);

/**
 * Фильтрация поля Select
 */
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

onMounted(async () => {
  await controlStore.getListParts();
  stringOptions.value = null;
  stringOptions.value = controlStore.allParts;
});

const inputVes = async () => {
  vesOff.value = true;
};

const addVes = () => {
  if (currentVes.value != controlStore.countAnimals) {
    controlStore.allVes.push({
      id: currentVes.value,
      ves: ves.value,
    });
    controlStore.midleVes = Number(controlStore.midleVes) + Number(ves.value);
    ++currentVes.value;
  } else if (currentVes.value == controlStore.countAnimals) {
    controlStore.allVes.push({
      id: currentVes.value,
      ves: ves.value,
    });

    tableListVesAnimals.value = true;
    controlStore.midleVes = Number(controlStore.midleVes) + Number(ves.value);
    controlStore.midleVes = Math.round(
      Number(controlStore.midleVes) / Number(controlStore.countAnimals)
    );
    vesOff.value = false;
  }
  ves.value = 10;
};

const addMidVes = () => {
  tableListVesAnimals.value = true;
  dialogStatusFormAddMidVes.value = false;
  controlStore.step = 3;
};

/**
 *
 */
const addPart = async () => {
  if (part.value && part.value.label) {
    await controlStore.addPart({
      label: part.value.label,
      description: part.value.description || "",
    });
    addPartForm.value = false;
    Notify.create({
      message: "Новая партия животных к отслеживанию добавлена!",
      color: "green",
    });
    part.value = {};
  } else {
    Notify.create({
      message: "Название партии обязательно к заполнению!",
      color: "red",
    });
  }
};

// Проверка на ошибки выбора животного
const isError = () => {
  if (!controlStore.currentPart) {
    Notify.create({
      message: "Для продолжения нужно выбирить партию животных из списка",
      color: "red",
    });
  } else if (
    !controlStore.countAnimals ||
    !controlStore.oldAnimals ||
    !controlStore.midleVes
  ) {
    Notify.create({
      message:
        "Для продолжения нужно ввести количество животных, возраст и вес",
      color: "red",
    });
  } else {
    controlStore.step = 3;
  }
};
</script>

<style lang="scss" scoped></style>
