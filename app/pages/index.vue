<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <div id="header">
    <div>
      <div class="text-box">
        <h1 class="heading-primary">
          <span class="heading-primary-main">Outdoors</span>
          <span class="heading-primary-sub">is where life happens</span>
        </h1>
        <a href="#" class="btn btn-white btn-animated">discover our tours</a>
      </div>
    </div>
  </div>

  <main>
    <section class="section-about">
      <div class="u-center-text">
        <h2 class="heading-secondary">
          Exciting tours adventures pepple
        </h2>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div class="col-span-1">
          <h3 class="heading-tertiary">
            You're going to fall in love with nature
          </h3>
          <p class="paragraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <h3 class="heading-tertiary">
            Live adventures like you never have before
          </h3>
          <p class="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <a href="#" class="btn-text">
            Learn more &rarr;
          </a>
        </div>
        <div class="col-span-1">
          <div class="composition">
            <img src="~/assets/image.png" alt="Photo 1" class="composition__photo composition__photo--p1">
            <img src="~/assets/image.png" alt="Photo 2" class="composition__photo composition__photo--p2">
            <img src="~/assets/image.png" alt="Photo 3" class="composition__photo composition__photo--p3">
          </div>
        </div>
      </div>
    </section>
  </main>

  <span>{{ personResult ?? "none" }}</span>
  <button @click="searchPersonByIndex(0)" class="block w-20 h-10 cursor-pointer bg-black rounded-xl">
    <span class="text-white">search</span>
  </button>
</template>

<script setup lang="ts">
import type { people } from '~/model/people'
import { usePeopleStore } from '~/store/people'

const peopleStore = usePeopleStore()
const personResult = ref<people | null>(null)

peopleStore.peopleAdd({ age: 22, name: 'kiriyama' } as people)
const searchPersonByIndex = async (index: number = 0) => {
  try {
    console.log('searching...')
    personResult.value = await peopleStore.AsyncGetPeopleByIndex(index)
  } catch (error) {
    console.error('搜索失败:', error)
    personResult.value = null
  }
}
</script>

<style lang="scss" scoped>
</style>
