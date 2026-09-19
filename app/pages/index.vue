<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <div id="header">
    <div>
    </div>
  </div>

  <main>
  </main>
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
