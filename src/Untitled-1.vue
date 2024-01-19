<template>
  <div class="app_container">
    <h2>当水温达到60°,或水位达到80cm时,给服务器发请求</h2>
    <h2>当前水温：{{ temp }}</h2>
    <h2>当前水位：{{ height }}</h2>
    <button @click="changeTemp">水温+10</button>
    <button @click="changeHeight">水位+10</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, watchEffect } from "vue";

const temp = ref(10);
const height = ref(0);

const changeTemp = () => {
  temp.value += 10;
};
const changeHeight = () => {
  height.value += 10;
};
// watch([temp, height], (value) => {
//   let [newTemp, newHeight] = value;
//   if (newTemp >= 60 || newHeight >= 80) {
//     // console.log("watch====>请求服务器");
//   }
// });

// 立即运行一个函数 同时响应式地追踪其依赖，并在依赖更改时重新执行该函数
watchEffect(() => {
  // 这里当先让水温条件满足之后 水位的变化watchEffect就不执行了
  if (temp.value >= 60 || height.value >= 80) {
    console.log("watchEffect===>请求服务器");
  }
});
</script>

<style scoped>
.app_container {
  border-radius: 5px;
  padding: 20px;
  width: 100%;
  background: turquoise;
  box-shadow: -5px 5px 5px black;
}
</style>
