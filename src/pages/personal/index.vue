<script setup lang="ts">
import { UserCard } from '~/entities/user'

const user = {
  id: 1,
  name: 'Петров Петр Петрович',
  avatar: 'https://freesvg.org/img/Cartoon-Man-Avatar-2.png',
  phone: '+7 (965) 373-92-01'
};
</script>

<template>
  <div class="container mx-auto px-4 pt-10">
    <h2 class="text-lg font-semibold text-slate-900 mb-8">Личный кабинет</h2>
    <UserCard :user="user" />
  </div>
</template>