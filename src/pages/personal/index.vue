<script setup lang="ts">
import { onMounted, ref  } from 'vue';
import { UserCard } from '~/entities/user';
import { User, pedantApi, USER_FIELDS } from '~/shared/api';
import { AxiosResponse } from 'axios';
import { RESPONSE_STATES, GetSubscriptionsResponse } from '~/shared/api/pedant/auth';
import { authProcess } from '~/processes/index';

const user = ref<User>();

onMounted(async () => {
  const token = authProcess.loadToken();
  if (token) {
    await getUser(token);
  }
});

async function getUser(token: string) {
  await pedantApi.auth.getSubscriptions(token)
    .then((result: AxiosResponse<GetSubscriptionsResponse>) => {
      if (result.statusText === RESPONSE_STATES.OK) {
        const newUser = {
          [USER_FIELDS.ID]: result.data.data[USER_FIELDS.ID],
          [USER_FIELDS.AVATAR]: result.data.data[USER_FIELDS.AVATAR],
          [USER_FIELDS.CUSTOMER_NAME]: result.data.data[USER_FIELDS.CUSTOMER_NAME],
          [USER_FIELDS.CUSTOMER_PHONE]: result.data.data[USER_FIELDS.CUSTOMER_PHONE],
        };

        user.value = newUser;
      }
    })
      .catch(() => {
        // handle error
      });
};
</script>

<template>
  <div class="container mx-auto px-4 pt-10">
    <h2 class="text-lg font-semibold text-slate-900 mb-8">Личный кабинет</h2>
    <UserCard
      v-if="user"
      :user="user" />
  </div>
</template>