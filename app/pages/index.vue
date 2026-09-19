<!-- eslint-disable vue/no-multiple-template-root -->
<template>
<div class="bg-gray-300 dark:bg-black m-3 flex items-center rounded-xl has-[a:hover]:bg-gray-500">
  <span class="text-black font-semibold dark:text-white flex-1 text-2xl ml-2">Components</span>
  <span class="mr-2">
    <NuxtLink
      to="/animation/colorfulrotation"
      class="text-red-300 hover:text-red-500 text-2xl ml-2 transition-colors"
    >
      Animations
    </NuxtLink>
  </span>
</div>
<div class="p-5">
  <div class="mb-5">
    <UButton
      label="Search Person By Index"
      @click="searchPersonByIndex(0)"
    />
  </div>
  <div v-if="personResult" class="p-3 bg-gray-200 dark:bg-gray-800 rounded-lg">
    <p class="text-lg font-semibold">Person Result:</p>
    <p>Name: {{ personResult.name }}</p>
    <p>Age: {{ personResult.age }}</p>
  </div>
  <div v-else class="text-gray-500 dark:text-gray-400">
    No person found. Click the button to search.
  </div>
</div>
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
