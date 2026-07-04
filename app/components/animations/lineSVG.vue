<template>
  <svg viewBox="0 0 30 12" xmlns="http://www.w3.org/2000/svg">

    <line x1="0" y1="1" x2="30" y2="1" />

    <!-- 虚线段和间隙长度相同 -->
    <line x1="0" y1="3" x2="30" y2="3" stroke-dasharray="4" />

    <!-- 虚线段和间隙长度不同 -->
    <line x1="0" y1="5" x2="30" y2="5" stroke-dasharray="4 1" />

    <!-- 具有奇数个不同长度的虚线段和间隙 -->
    <line x1="0" y1="7" x2="30" y2="7" stroke-dasharray="4 1 2" />

    <!-- 具有偶数个不同长度的虚线段和间隙 -->
    <line x1="0" y1="9" x2="30" y2="9" stroke-dasharray="4 1 2 3" />

    <!-- 以间隙开始的虚线 -->
    <line x1="0" y1="11" x2="30" y2="11" stroke-dasharray="0 4 0" />
  </svg>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
line {
  stroke-width: 1;
  stroke: #000;
}
</style>
