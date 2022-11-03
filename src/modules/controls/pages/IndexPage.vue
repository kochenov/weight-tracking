<template>
  <!--
    Шаг. 1 Выбор животного или добавление нового
   -->
  <q-page class="column flex-center">
    <div class="q-pa-md my-card">
      <q-stepper
        v-model="controlStore.step"
        ref="stepper"
        color="primary"
        animated
      >
        <q-step
          :name="1"
          title="Выбор животного"
          icon="settings"
          :done="controlStore.step > 1"
          style="min-height: 200px"
          class="flex flex-center"
        >
          <StepOneConponent />
        </q-step>

        <q-step
          :name="2"
          title="Количество животных"
          caption="Ввод веса"
          icon="create_new_folder"
          :done="controlStore.step > 2"
          style="min-height: 200px"
          class="flex flex-center"
        >
          <StepTwoComponent />
        </q-step>

        <q-step
          :name="3"
          title="Результаты вычисления"
          :done="controlStore.step > 3"
          icon="assignment"
          style="min-height: 200px"
        >
          <StepThreeConponent />
        </q-step>

        <q-step
          :name="4"
          title="График роста"
          icon="add_comment"
          style="min-height: 200px"
        >
          <StepFourComponent />
        </q-step>

        <template v-slot:message>
          <q-banner
            v-if="controlStore.step === 1"
            class="bg-purple-8 text-white q-px-lg"
          >
            Выбирите животное, чей вес хотите контролировать.
          </q-banner>
          <q-banner
            v-if="controlStore.step === 2 && !controlStore.currentPart"
            class="bg-orange-8 text-white q-px-lg"
          >
            На данном этапе нужно выбрать партию, количество и возраст
            <i>{{ controlStore.currentAnimal.word5 }}</i>
          </q-banner>
          <q-banner
            v-if="controlStore.step === 2 && controlStore.currentPart"
            inline-actions
            class="bg-teal-9 text-white"
          >
            Для расчётов выбраны
            <q-chip
              square
              size="12px"
              color="deep-orange"
              text-color="white"
              icon="done"
            >
              {{ controlStore.currentAnimal.label }}
            </q-chip>
            <br />
            Партия:
            <span class="text-deep-orange">{{
              controlStore.currentPart.label
            }}</span>

            <template v-slot:action>
              <q-btn
                flat
                @click="
                  () => {
                    controlStore.step = 1;
                    controlStore.currentAnimal = null;
                    controlStore.currentPart = null;
                  }
                "
                label="Выбрать животное"
              />
              <q-btn
                flat
                @click="
                  () => {
                    controlStore.step = 2;
                    controlStore.currentPart = null;
                  }
                "
                label="Выбрать партию"
              />
            </template>
          </q-banner>

          <q-banner
            v-if="controlStore.step === 3"
            class="bg-green-8 text-white q-px-lg"
          >
            Результат вычисления среднего веса животных
          </q-banner>
          <q-banner
            v-if="controlStore.step === 4"
            class="bg-blue-8 text-white q-px-lg"
          >
            Произвольный график роста
            <b>{{ controlStore.tempOnResult.animal.word5 }}</b> по дням
          </q-banner>
        </template>
      </q-stepper>
    </div>
  </q-page>
</template>

<script setup>
import { useControlStore } from "src/stores/all";
import StepOneConponent from "../components/steps/StepOneConponent.vue";
import StepTwoComponent from "../components/steps/StepTwoComponent.vue";
import StepThreeConponent from "../components/steps/StepThreeConponent.vue";
import StepFourComponent from "../components/steps/StepFourComponent.vue";
/**
 * Инициализация хранилищ
 */
const controlStore = useControlStore(); // Хранилище расчётов
</script>
<style lang="scss">
.my-card {
  max-width: 900px;
}

.q-stepper__step-content {
  width: 100%;
}
</style>
