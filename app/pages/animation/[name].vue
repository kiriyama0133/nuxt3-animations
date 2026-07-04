<template>
  <div class="p-6 max-w-4xl mx-auto">
    <NuxtLink to="/" class="inline-flex items-center gap-2 text-blue-600 hover:underline mb-4">
      ← 返回首页
    </NuxtLink>
    <h1 class="text-3xl font-bold mb-2">
      {{ animationName }}
    </h1>
    <p class="text-gray-500 mb-6">
      动画展示
    </p>
    <div class="border-2 border-dashed border-gray-300 rounded-lg p-12 min-h-[400px] flex items-center justify-center bg-gray-50">
      <component
        :is="component"
        :key="componentKey"
        class="w-full"
      />
    </div>

    <!-- 自动扫描 components/animations/ 目录生成按钮 -->
    <div class="mt-6 flex gap-3 flex-wrap">
      <NuxtLink
        v-for="item in availableAnimations"
        :key="item"
        :to="`/animation/${item}`"
        class="px-4 py-2 rounded-lg border transition-colors"
        :class="
          item === animationName
            ? 'bg-blue-600 text-white border-blue-600'
            : 'border-gray-300 hover:bg-gray-100'
        "
      >
        {{ item }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const animationName = computed(() => route.params.name as string)
const component = defineAsyncComponent({
  loader: () => import(`~/components/animations/${animationName.value}.vue`),
  onError: () => {
    console.warn(`动画组件 ${animationName.value} 不存在，重定向到 fade`)
    navigateTo('/animation/fade', { replace: true })
  }
})
const componentKey = ref(0)
const animationModules = import.meta.glob('~/components/animations/*.vue')
const availableAnimations = computed(() => {
  return Object.keys(animationModules).map((path) => {
    const fileName = path.split('/').pop() || ''
    return fileName.replace('.vue', '')
  })
})
onMounted(() => {
  if (!availableAnimations.value.includes(animationName.value)) {
    navigateTo(`/animation/${availableAnimations.value[0] || 'fade'}`, { replace: true })
  }
})
const replay = () => {
  componentKey.value++
}
</script>
