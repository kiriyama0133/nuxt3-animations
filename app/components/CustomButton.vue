<template>
  <button
    :class="['btn', `btn--${variant}`, `btn--${size}`, { 'btn--disabled': disabled || loading }]"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
type Variant = 'primary' | 'secondary' | 'danger'
type Size = 'small' | 'medium' | 'large'
interface Props {
  variant?: Variant
  size?: Size
  disabled?: boolean
  loading?: boolean
  onClick?: (event: MouseEvent) => void
}
const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'medium',
  disabled: false,
  loading: false
})
const emit = defineEmits<{
  click: [event: MouseEvent]
}>()
const handleClick = (event: MouseEvent) => {
  if (props.disabled || props.loading) return
  emit('click', event)
  props.onClick?.(event)
}
</script>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  gap: 8px;
  padding: 2px 4px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s ease;
}
.btn:disabled, .btn--disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
.btn--sm {
  padding: 4px 8px;
  font-size: 12px;
}
.btn--md {
  padding: 8px 16px;
  font-size: 14px;
}
.btn--lg {
  padding: 12px 24px;
  font-size: 16px;
}
.btn--primary {
  background-color: #007bff;
  color: #fff;
}
.btn--primary:hover:not(:disabled) {
  background-color: #0056b3;
}
.btn--secondary {
  background-color: #6c757d;
  color: #fff;
}
.btn--secondary:hover:not(:disabled) {
  background-color: #5a6268;
}
</style>
