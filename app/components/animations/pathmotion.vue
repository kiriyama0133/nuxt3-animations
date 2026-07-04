<template>
  <svg
    viewBox="0 0 600 600"
    class="path-drawing"
  >
    <path
      id="mypath"
      pathLength="1"
      d="M 10,234 C 197,324 177,41 528,234"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="bottom-path"
      vector-effect="non-scaling-stroke"
    />
    <circle
      id="mycircle"
      r="10"
      fill="red"
    />
    <animateMotion
      href="#mycircle"
      dur="5s"
      repeatCount="indefinite"
    >
      <mpath
        href="#mypath"
      />
    </animateMotion>
  </svg>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
path {
  stroke: black;
  stroke-width: 5;
}
</style>
