<script setup lang="ts">
const props = defineProps({
  modelValue: String
});

const emit = defineEmits(['update:modelValue']);

const changeCode = (code: string) => {
  emit('update:modelValue', code);
}
</script>

<template>
  <div>
    <label for="input-code" class="font-semibold text-slate-900">Введите код из SMS
      <input id="input-code"
        class="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-2 mt-5 ring-1 ring-slate-200 shadow-sm"
        type="text"
        aria-label="Код из SMS"
        placeholder="Код из SMS"
        :value="props.modelValue"
        @input="changeCode($event.target.value)">
    </label>
  </div>
</template>