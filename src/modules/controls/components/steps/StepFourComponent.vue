<template>
  <VueApexCharts
    type="line"
    :options="optionsCharts"
    :series="series"
  ></VueApexCharts>
  <q-stepper-navigation>
    <q-btn
      flat
      @click="controlStore.step = 1"
      color="primary"
      label="Новый расчёт"
      class="q-ml-sm"
    />
    <q-btn
      flat
      @click="getListResult()"
      color="primary"
      label="Обновить"
      class="q-ml-sm"
    />
  </q-stepper-navigation>
</template>

<script setup>
import { onMounted, ref, toRaw } from "vue";
import VueApexCharts from "vue3-apexcharts";
import { useControlStore } from "src/stores/all";

const controlStore = useControlStore(); // Хранилище расчётов

const optionsCharts = ref({
  title: {
    text: "Средний вес животных",
    align: "left",
  },
  chart: {
    height: 350,
    type: "line",
    dropShadow: {
      enabled: true,
      color: "#000",
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2,
    },
  },
  colors: ["#1976D2", "#545454"],
  dataLabels: {
    enabled: true,
  },
  stroke: {
    //curve: "smooth",
  },
  xaxis: {
    title: {
      text: "Возраст животного в днях",
    },
    type: "category",
    //categories: [],
  },
  yaxis: {
    title: {
      text: "Средний вес животного в граммах",
    },
  },
});
const series = ref([
  {
    name: "Вес в граммах",
    data: [],
  },
]);

onMounted(async () => {
  await getListResult();
});

const getListResult = async () => {
  try {
    await controlStore.getListHistory(
      controlStore.tempOnResult.animal.label,
      controlStore.tempOnResult.part.label
    );

    series.value[0].data = controlStore.resultGraphSeries;
    series.value[0].data.unshift({ x: "Рождение", y: 10 });
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped></style>
