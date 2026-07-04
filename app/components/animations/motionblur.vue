<template>
  <div class="loader">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.loader {
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
}
.loader :hover {
  background: #03e9f4;
  box-shadow: 0 0 5px #03e9f4,
              0 0 25px #03e9f4,
              0 0 50px #03e9f4,
              0 0 200px #03e9f4;
}
.loader span {
  position: absolute;
  display: block;
}
.loader span:nth-child(1) {
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: animate1 1s linear infinite;
  animation-delay: 0s;
}
.loader span:nth-child(3){
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: animate2 1s linear infinite;
  animation-delay: 0s;
}
@keyframes animate1 {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}
@keyframes animate2 {
  0% {
    left: 100%;
  }
  100% {
    left: -100%;
  }
}
</style>
