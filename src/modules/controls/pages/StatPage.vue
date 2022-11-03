<template>
  <div class="column">
    <h1 class="text-h4 q-px-md q-mb-none q-pt-sm">
      Подробная статистика по росту
      {{ controlStore.currentAnimal ? controlStore.currentAnimal.word5 : "" }}
    </h1>
    <div class="text-caption q-pl-lg q-pb-lg">{{ route.params.part }}</div>
    <q-separator inset />
    <div class="row q-py-md flex-center">
      <q-card class="q-ma-md col">
        <VueApexCharts
          class="q-pa-lg"
          v-if="statusGraph"
          style="min-height: 500px"
          type="line"
          height="100%"
          :options="optionsCharts"
          :series="series"
        ></VueApexCharts>
        <q-card-section>
          <div>Ratio 16:9</div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import VueApexCharts from "vue3-apexcharts";
import { useControlStore } from "../store";

const route = useRoute();
const controlStore = useControlStore();
const statusGraph = ref(false);
const optionsCharts = ref({
  title: {
    text: "Средний вес животных",
    align: "left",
  },
  annotations: {
    yaxis: [
      {
        y: null,
        y2: null,
        borderColor: "#00E233",
        fillColor: "red",
        label: {
          borderColor: "red",
          style: {
            color: "#fff",
            background: "red",
          },
          text: "",
        },
      },
    ],
  },
  chart: {
    height: 500,
    toolbar: {
      show: true,
      autoSelected: "zoom",
    },
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
  try {
    await getListResult();
  } catch (error) {
    console.log(error);
  }
});

const getListResult = async () => {
  try {
    await controlStore.getListHistory(route.params.animal, route.params.part);
    series.value[0].data = controlStore.resultGraphSeries;
    setTimeout(() => {
      if (
        Math.max(...controlStore.resultGraphOptions) >
        Number(
          controlStore.resultGraphOptions[
            controlStore.resultGraphOptions.length - 1
          ]
        )
      ) {
        optionsCharts.value.annotations.yaxis[0].y = Math.max(
          ...controlStore.resultGraphOptions
        );
        optionsCharts.value.annotations.yaxis[0].y2 = Number(
          controlStore.resultGraphOptions[
            controlStore.resultGraphOptions.length - 1
          ]
        );
        optionsCharts.value.annotations.yaxis[0].label.text =
          "Вес от максимального уменьшился на " +
          (optionsCharts.value.annotations.yaxis[0].y -
            optionsCharts.value.annotations.yaxis[0].y2) +
          " граммов";
      } else {
        optionsCharts.value.annotations.yaxis = [];
      }

      statusGraph.value = true;
    }, 1500);
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped>
.hh500 {
  min-height: 500px;
}
</style>
