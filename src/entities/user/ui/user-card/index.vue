<script setup lang="ts">
import { toRefs } from 'vue'
import type { PropType } from 'vue';
import type { User } from 'shared/api';
import { UserAvatar } from '../user-avatar';

const props = defineProps({
  user: {
    type: Object as PropType<User>,
    default: {},
  }
});

const { user } = toRefs(props);
</script>

<template>
  <article className="flex space-x-6 p-6 bg-blue-300">
      <UserAvatar :user="user" />
      <div>
        <h2 className="font-semibold text-slate-900 truncate pr-20">{{user.name}}</h2>
        <p className="mt-2 text-sm leading-6 font-normal">{{user.phone}}</p>
      </div>
    </article>
</template>