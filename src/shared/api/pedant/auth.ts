import type { AxiosPromise } from "axios";
import { apiInstance } from "./base";
import { User } from "./models";

const URLS = {
  GENERATE_OTP: "/generate-otp",
  VERIFY_OTP: "/verify-otp",
  SUBSCRIPTIONS: '/subscriptions',
};

export const FIELDS = {
  PHONE_NUMBER: 'phone_number',
  OTP_CODE: 'otp_code'
} as const;

export const RESPONSE_STATES = {
  OK: 'OK',
  UNPROCESSABLE_ENTITY: "Unprocessable Entity"
} as const;

export const RESPONSE_ERROR_MESSAGES = {
  INCORRECT_CODE: 'Код не подходит, введите код повторно'
}

export type GenerateOtpParams = {
  [FIELDS.PHONE_NUMBER]: string,
};

export const generateOtp = (params: GenerateOtpParams): AxiosPromise => {
  return apiInstance.post(
    URLS.GENERATE_OTP,
    JSON.stringify(params),
    {
      headers: {
        'Content-Type': 'application/json',
      }
    }
  );
};

export type VerifyOtpParams = {
  [FIELDS.PHONE_NUMBER]: string,
  [FIELDS.OTP_CODE]: string
};

export const verifyOtp = (params: VerifyOtpParams): AxiosPromise => {
  return apiInstance.post(
    URLS.VERIFY_OTP,
    JSON.stringify(params),
    {
      headers: {
        'Content-Type': 'application/json',
      }
    }
  );
};

export type GetSubscriptionsResponse = {
  data: User,
  statusText: string,
}

export const getSubscriptions = (token: string): AxiosPromise<GetSubscriptionsResponse> => {
  return apiInstance.get(
    URLS.SUBSCRIPTIONS,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        token,
      }
    }
  );
};