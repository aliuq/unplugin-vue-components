<script setup lang="ts">import { ref } from 'vue';

const rate = ref(3)
</script>

<template>
  <h1 align="center">
    相关组件
    <nut-rate v-model="rate" />
  </h1>

  <nut-grid class="main-layout">
    <nut-grid-item icon="dongdong" text="Button" to="/button"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
    <nut-grid-item icon="dongdong" text="文字"></nut-grid-item>
  </nut-grid>
</template>

<style>
.main-layout .nut-grid-item .nut-grid-item__content {
  background-color: #282828;
}
</style>
