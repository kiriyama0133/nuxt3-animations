<template>
  <svg
    id="svg"
    class=""
    viewbox="0 0 100 500"
  >
    <text
      x="50"
      y="10"
      text-anchor="middle"
      dominant-baseline="middle"
    >
      <tspan
        id="text"
        class="text"
        font-size="10"
        fill="black"
      >Hello</tspan>
    </text>
    <path
      id="mypath"
      pathLength="1"
      d="M 10,34 C 27,124 77,41 88,34"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="bottom-path"
      vector-effect="non-scaling-stroke"
    />
    <text
      font-size="2rem"
    >
      <textPath
        href="#mypath"
        startOffset="10%"
      >
        <tspan
          id="text"
          class="text"
          font-size="10"
          fill="black"
          textLength="100"
        >
          Hello
        </tspan>
      </textPath>
    </text>
  </svg>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
svg {
  path {
    stroke: black;
    stroke-width: 2;
  }
}
</style>
