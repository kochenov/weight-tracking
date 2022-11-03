<template>
  <div class="q-px-lg">
    <h1 class="text-center text-h5">
      {{ route.params.currentAnimal }} - контроль веса
    </h1>
    <q-separator />
  </div>
  <div class="q-pa-lg row justify-center q-col-gutter-xl">
    <div class="col-lg-8 col-sm-12" v-for="(item, key) in parts" :key="item">
      <q-card bordered>
        <q-card-section horizontal>
          <q-card-section class="q-pt-xs">
            <div class="text-overline">{{ route.params.currentAnimal }}</div>
            <div class="text-h6 q-mt-sm q-mb-xs">
              {{ key }}
              <q-badge align="top" color="green">Партия</q-badge>
            </div>
          </q-card-section>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <div class="row">
            <template v-for="(value, k, index) in parts[key]" :key="value">
              <div
                class="col"
                v-if="Object.keys(parts[key]).length - 1 === index"
              >
                <q-list>
                  <q-item>
                    <q-item-section>
                      <q-item-label>Количество</q-item-label>
                    </q-item-section>

                    <q-item-section side>
                      <q-item-label caption>{{ value.count }}</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-separator spaced inset />
                  <q-item>
                    <q-item-section>
                      <q-item-label>Возраст</q-item-label>
                    </q-item-section>

                    <q-item-section side>
                      <q-item-label caption
                        >{{ value.days }}
                        {{
                          declOfNum(value.days, ["день", "дня", "дней"])
                        }}</q-item-label
                      >
                    </q-item-section>
                  </q-item>

                  <q-separator spaced inset />

                  <q-item>
                    <q-item-section>
                      <q-item-label>Средний вес</q-item-label>
                    </q-item-section>

                    <q-item-section side>
                      <q-item-label caption
                        >{{
                          value.scope > 1000
                            ? value.scope / 1000 + " кг"
                            : value.scope + " грамм"
                        }}
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
            </template>
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <q-btn
            :to="`/stat/${route.params.currentAnimal}/${key}`"
            class="full-width q-pa-md"
            color="teal-9"
            label="Смотреть статистику роста животных"
          />
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { declOfNum } from "src/helpers/word";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useControlStore } from "../store";

const route = useRoute();
const controlStore = useControlStore();
onMounted(async () => {
  if (route.params.currentAnimal) {
    await controlStore.getListAllResult();
  }
});

const parts = computed(() => {
  let data = controlStore.allResults.find(
    (item, index, array) => item.animal == route.params.currentAnimal
  );
  //console.log(data.parts);
  return data ? data.parts : null;
});
</script>

<style lang="scss" scoped></style>
