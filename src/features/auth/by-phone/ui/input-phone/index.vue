<script setup lang="ts">
const props = defineProps({
  modelValue: String
});

const emit = defineEmits(['update:modelValue']);

const changePhone = (phone: string) => {
  emit('update:modelValue', phone);
}
</script>

<template>
  <div>
    <label for="input-phone" class="font-semibold text-slate-900">Введите номер телефона
      <input id="input-phone"
        class="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-2 mt-5 ring-1 ring-slate-200 shadow-sm"
        type="text"
        aria-label="Номер телефона"
        placeholder="Номер телефона"
        :value="props.modelValue"
        @input="changePhone($event.target.value)">
    </label>
  </div>
</template>