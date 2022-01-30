<template>
  <div class="min-h-screen flex justify-center">
    <div class="w-full max-w-screen-xl px-16 pt-24 pb-32">
      <div class="grid h-full grid-cols-3 grid-rows-2 gap-8">
        <div class="bg-gradient-to-tr from-deep-300 to-deep-400 rounded-3xl p-8">
          <h1 class="font-semibold text-2xl">Stats</h1>
          <button @click="updateChart">add</button>
        </div>
        <div class="bg-deep-500 rounded-3xl"></div>
        <div class="bg-deep-500 rounded-3xl"></div>
        <div class="col-span-2 bg-deep-500 rounded-3xl">
          <apexchart width="100%" type="line" :options="options" :series="series"></apexchart>
        </div>
        <div class="bg-gradient-to-tr from-deep-300 to-deep-400 rounded-3xl"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
const options = {
  chart: {
    id: 'vuechart-example'
  },
}
const series = ref([{
  name: 'series-1',
  data: new Array<number>()
}])

function addRandom() {
  series.value[0].data.push(30)
}

function updateChart() {
  const max = 90;
  const min = 20;
  let newData = []
  for (let i = 0; i < 100; i++) {
    newData[i] = Math.floor(Math.random() * (max - min + 1) + min)
  }
  // In the same way, update the series option
  series.value = [{
    name: 'series-1',
    data: newData
  }]
}
</script>
