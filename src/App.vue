<script setup lang="ts">
import { UserCard } from './entities/user'

const user = {
  id: 1,
  name: 'Петров Петр Петрович',
  avatar: 'https://freesvg.org/img/Cartoon-Man-Avatar-2.png',
  phone: '+7 (965) 373-92-01'
};
</script>

<template>
  <UserCard :user="user" />
</template>
