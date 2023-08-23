import type { AxiosPromise } from "axios";
import { apiInstance } from "./base";

const URLS = {
  GENERATE_OTP: "/generate-otp",
  VERIFY_OTP: "/verify-otp"
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
  INCORRECT_CODE: 'Код не подходит, попробуйте отправить SMS повторно'
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