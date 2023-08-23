<script setup lang="ts">
import { AxiosResponse } from 'axios';
import { GenerateOtpParams } from 'shared/api/pedant/auth';
import { ref } from 'vue'
import { authByPhone } from '../../features/auth'
import { pedantApi } from '../../shared/api';

enum Stages {
  'phone',
  'code',
}

const currentStage = Stages.phone;
const phone = ref('');

async function submitAuthForm() {
  if (currentStage === Stages.phone) {
    const data: GenerateOtpParams = { phone_number: phone.value};
    await pedantApi.auth.generateOtp(data)
      .then((result: AxiosResponse) => console.log(result));
  }
}
</script>

<template>
  <form @submit.prevent="submitAuthForm">
    <h2>Вход в личный кабинет</h2>
    <authByPhone.InputPhone
      v-if="currentStage === Stages.phone"
      v-model="phone" />
    <authByPhone.InputCode
      v-else />
    <div class="mt-5">
      <input type="submit"
        class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg w-full cursor-pointer"
        value="Далее" />
    </div>
  </form>
</template>