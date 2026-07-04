<script setup lang="ts">
</script>

<template>
  <svg
    viewBox="0 0 600 600"
    class="path-drawing"
  >
    <path
      pathLength="1"
      d="M 10,234 C 197,324 177,41 528,234"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="bottom-path"
      vector-effect="non-scaling-stroke"
    />
    <path
      id="mypath"
      pathLength="1"
      d="M 10,234 C 197,324 177,41 528,234"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-dasharray="0.20 0.82"
      stroke-dashoffset="1"
      vector-effect="non-scaling-stroke"
    >
      <animate
        attributeName="stroke-dashoffset"
        from="1"
        to="0"
        dur="2.2s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
</template>

<style lang="scss" scoped>
svg {
  border: 2px solid black;
  width: 600px;
  height: 600px;
}

svg .bottom-path {
  stroke: #ccc;
  stroke-width: 20;
}

svg path {
  stroke: black;
  stroke-width: 20;
}
</style>
