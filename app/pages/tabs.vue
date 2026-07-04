<template>
  <div>
    <nav class="flex">
      <div class="left-nav p-4 flex flex-col overflow-hidden relative">
        <label v-for="tab in tabs" :key="tab.id" class="flex items-center gap-2 px-4 py-2 rounded cursor-pointer">
          <input
            type="radio"
            name="tabGroup"
            v-model="selectedTab"
            :value="tab.id"
            class="w-4 h-4 block nav-input"
          >
          <span class="text-nowrap select-none nav-label uppercase">{{ tab.label }}</span>
        </label>
      </div>
      <div class="right-content flex-1 p-6">
        <section class="overflow-auto select-none">
          <p>当前选中的是:{{ activeTabLevel }}</p>
        </section>
      </div>
    </nav>
  </div>
</template>

<script lang="ts" setup>
const tabs = [
  { id: 1, label: 'about' },
  { id: 2, label: 'second' },
  { id: 3, label: 'email' },
  { id: 4, label: 'work' }
]
const selectedTab = ref(1)
const activeTabLevel = computed(()=>{
  const tab = tabs.find(t => t.id === selectedTab.value)
  return tab?.label != null ? tab.label : ''
})
</script>

<style lang="scss" scoped>
@use '~/assets/components/tabs.scss';
</style>
