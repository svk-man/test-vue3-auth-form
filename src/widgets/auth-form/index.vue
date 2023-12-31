<script setup lang="ts">
import { AxiosError, AxiosResponse } from 'axios';
import { GenerateOtpParams, VerifyOtpParams,
  FIELDS, RESPONSE_STATES, RESPONSE_ERROR_MESSAGES } from '~/shared/api/pedant/auth';
import { ref, watch } from 'vue'
import { authByPhone } from '~/features/auth'
import { pedantApi } from '~/shared/api';
import { useRouter } from 'vue-router';
import { authProcess } from '~/processes/index';

enum Stages {
  'phone',
  'code',
}

const currentStage = ref(Stages.phone);
const phone = ref('');
const code = ref('');
const errorMessage = ref('');
watch(code, () => errorMessage.value = '');

async function submitAuthForm() {
  if (currentStage.value === Stages.phone) {
    await sendPhone();
  } else {
    await sendCode();
  }
}

async function sendPhone() {
  const data: GenerateOtpParams = { [FIELDS.PHONE_NUMBER]: phone.value };
  await pedantApi.auth.generateOtp(data)
    .then((result: AxiosResponse) => {
      if (result.statusText === RESPONSE_STATES.OK) {
        currentStage.value = Stages.code;
      }
    })
    .catch(() => {
      // handle error
    });
};

const router = useRouter();

async function sendCode() {
  const data: VerifyOtpParams = {
    [FIELDS.PHONE_NUMBER]: phone.value,
    [FIELDS.OTP_CODE]: code.value
  };

  await pedantApi.auth.verifyOtp(data)
    .then((result: AxiosResponse) => {
      if (result.statusText === RESPONSE_STATES.OK) {
        authProcess.saveToken(result.data['access_token']);
        router.push({ path: '/personal' })
      }
    })
    .catch((error: AxiosError) => {
      if (error.response?.statusText === RESPONSE_STATES.UNPROCESSABLE_ENTITY) {
        errorMessage.value = RESPONSE_ERROR_MESSAGES.INCORRECT_CODE;
      } else {
        // handle error
      }
    });
}
</script>

<template>
  <form class="max-w-md" @submit.prevent="submitAuthForm">
    <authByPhone.InputPhone
      v-if="currentStage === Stages.phone"
      v-model="phone" />
    <authByPhone.InputCode
      v-model="code"
      v-else />
    <p
      v-if="errorMessage"
      class="text-sm text-red-400 m-none mt-4"
      >{{ errorMessage }}</p>
    <div class="mt-5">
      <input type="submit"
        class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg w-full cursor-pointer"
        value="Далее" />
    </div>
  </form>
</template>