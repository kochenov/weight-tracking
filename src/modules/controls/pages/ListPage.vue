<template>
  <div class="q-px-lg">
    <h1 class="text-center text-h5">Список всех расчётов</h1>
    <q-separator />
  </div>
  <div class="q-pa-lg q-gutter-lg flex flex-center">
    <q-card
      v-for="item in controlStore.allResults"
      :key="item.animal"
      class="my-card text-white"
    >
      <q-card-section>
        <div class="text-h5 text-center text-green-11">
          {{ item.animal }}
        </div>
        <q-banner
          inline-actions
          rounded
          class="bg-orange text-white q-ma-md text-center"
        >
          <div class="text-weight-bold q-pb-xs">
            {{ Object.keys(item.parts).length }}
            {{
              declOfNum(Object.keys(item.parts).length, [
                "партия",
                "партии",
                "партий",
              ])
            }}
          </div>
        </q-banner>
      </q-card-section>
      <q-separator dark />

      <q-card-actions class="flex flex-center">
        <q-btn class="save-btn" flat :to="'/result/' + item.animal + '/'"
          >Расчёты</q-btn
        >
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup>
import { useControlStore } from "src/stores/all";
import { declOfNum } from "src/helpers/word";
import { onMounted } from "vue";

const controlStore = useControlStore();

onMounted(async () => {
  await controlStore.getListAllResult();
});
</script>

<style lang="scss" scoped>
.my-card {
  width: 310px;
  background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);
}
</style>
