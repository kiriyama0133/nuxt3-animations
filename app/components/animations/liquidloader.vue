<template>
  <section class="container">
    <svg>
      <filter id="gooey">
        <feGaussianBlur
          in="SourceGraphic"
          stdDeviation="10"
          result="blur"
        />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="
            1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 20 -10
          "
          result="goo"
        />
      </filter>
    </svg>
    <div class="loader">
      <span style="--i:1">
      </span>
      <span style="--i:2">
      </span>
      <span style="--i:3">
      </span>
      <span style="--i:4">
      </span>
      <span style="--i:5">
      </span>
      <span style="--i:6">
      </span>
      <span style="--j:1" class="rotate"></span>
      <span style="--j:2" class="rotate"></span>
      <span style="--j:3" class="rotate"></span>
      <span style="--j:4" class="rotate"></span>
    </div>
  </section>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
  $color-span: #03e9f4;
  $span-width: 40px;
  $span-height: 40px;
  $loader-width: 200px;
  $loader-height: 200px;
  $shadow-color: #00bcd4;
  $linear-gradient-color: #c7eeff;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #333131;
    position: relative;
  }
  .container svg {
    position: absolute;
    width: 0;
    height: 0;
    overflow: hidden;
  }
  .loader {
    justify-content: center;
    align-items: center;
    position: relative;
    width: $loader-width;
    height: $loader-height;
    filter: url(#gooey);
      animation: animate 16s ease-in-out infinite;
  }
  .loader span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    transform: rotate(calc(var(--i) * 60deg));
  }
  .loader span::before {
    content: "";
    position: absolute;
    top: 0;
    left: calc(50% - #{$span-width * 0.5});
    width: $span-width;
    height: $span-height;
    background: $color-span;
    background: linear-gradient(45deg, $linear-gradient-color, $color-span);
    border-radius: 50%;
    box-shadow: 0 0 30px $shadow-color;
  }
  .rotate {
    animation: animate 4s ease-in-out infinite;
    animation-delay: calc(-0.2s * var(--j));
  }
  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    80%,100% {
      transform: rotate(360deg);
    }
  }
</style>
