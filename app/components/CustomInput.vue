<!-- Input.vue -->
<template>
  <div :class="['input-wrapper', `input-wrapper--${size}`, { 'input-wrapper--error': error }]">
    <div
      v-if="$slots.prepend"
      class="input__prepend"
    >
      <slot name="prepend" />
    </div>

    <input
      :type="props.type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxlength"
      :autofocus="autofocus"
      class="input__field"
      @input="onInput"
      @blur="onBlur"
      @focus="onFocus"
      @change="onChange"
    />

    <span
      v-if="clearable && modelValue"
      class="input__clear"
      @click="clear"
    >
      ✕
    </span>

    <div
      v-if="$slots.append"
      class="input__append"
    >
      <slot name="append" />
    </div>

    <div v-if="error && errorMessage" class="input__error">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
type InputType = 'text' | 'password' | 'number' | 'email' | 'tel' | 'url'
type Size = 'small' | 'medium' | 'large'

interface Props {
  modelValue: string | number
  type?: InputType
  size?: Size
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  maxlength?: number
  autofocus?: boolean
  clearable?: boolean
  error?: boolean
  errorMessage?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  type: 'text',
  size: 'medium',
  placeholder: '',
  disabled: false,
  readonly: false,
  maxlength: undefined,
  autofocus: false,
  clearable: false,
  error: false,
  errorMessage: ''
})

// 事件定义
const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  'input': [event: Event]
  'blur': [event: FocusEvent]
  'focus': [event: FocusEvent]
  'change': [event: Event]
  'clear': []
}>()

// 输入事件处理
const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  let value: string | number = target.value

  // number 类型转换为数字
  if (props.type === 'number') {
    value = value === '' ? '' : Number(value)
  }

  emit('update:modelValue', value)
  emit('input', event)
}

const onBlur = (event: FocusEvent) => {
  emit('blur', event)
}

const onFocus = (event: FocusEvent) => {
  emit('focus', event)
}

const onChange = (event: Event) => {
  emit('change', event)
}

// 清空输入框
const clear = () => {
  emit('update:modelValue', '')
  emit('clear')
}
</script>

<style scoped>
/* 基础样式 */
.input-wrapper {
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  background-color: white;
  transition: all 0.2s;
  position: relative;
}

.input-wrapper:focus-within {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* 错误状态 */
.input-wrapper--error {
  border-color: #ef4444;
}

.input-wrapper--error:focus-within {
  border-color: #ef4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

/* 禁用状态 */
.input-wrapper:has(.input__field:disabled) {
  background-color: #f3f4f6;
  cursor: not-allowed;
}

/* 尺寸 */
.input-wrapper--small .input__field {
  padding: 4px 8px;
  font-size: 12px;
}

.input-wrapper--medium .input__field {
  padding: 8px 12px;
  font-size: 14px;
}

.input-wrapper--large .input__field {
  padding: 12px 16px;
  font-size: 16px;
}

/* 输入框本体 */
.input__field {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-family: inherit;
  width: 100%;
  min-width: 0;  /* 防止 flex 溢出 */
}

.input__field:disabled {
  cursor: not-allowed;
}

/* 前置/后置插槽 */
.input__prepend,
.input__append {
  display: flex;
  align-items: center;
  padding: 0 8px;
  color: #6b7280;
  font-size: 14px;
}

/* 清空按钮 */
.input__clear {
  display: flex;
  align-items: center;
  padding: 0 8px;
  color: #9ca3af;
  cursor: pointer;
  font-size: 14px;
  transition: color 0.2s;
}

.input__clear:hover {
  color: #6b7280;
}

/* 错误提示 */
.input__error {
  width: 100%;
  margin-top: 4px;
  padding-left: 8px;
  font-size: 12px;
  color: #ef4444;
}

/* 针对 textarea 的特殊处理（如果需要） */
textarea.input__field {
  resize: vertical;
  min-height: 60px;
}
</style>
