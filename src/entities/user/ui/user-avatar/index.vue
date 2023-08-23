<script setup lang="ts">
import { toRefs } from 'vue'
import type { PropType } from 'vue';
import type { User } from '~/shared/api';

const props = defineProps({
  user: {
    type: Object as PropType<User>,
    default: {},
  }
});

const { user } = toRefs(props);
</script>

<template>
  <img :src="user.avatar" :alt="user.name" class="w-12 h-12 rounded-full bg-slate-100 ring-2 ring-white" loading="lazy">
</template>