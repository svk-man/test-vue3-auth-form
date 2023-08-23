import type { AxiosPromise } from "axios";
import { apiInstance } from "./base";

const GENERATE_OTP_URL = "/generate-otp";

export type GenerateOtpParams = {
  'phone_number': string;
};

export const generateOtp = (params: GenerateOtpParams): AxiosPromise => {
  return apiInstance.post(
    GENERATE_OTP_URL,
    JSON.stringify(params),
    {
      headers: {
        'Content-Type': 'application/json',
      }
    }
  );
};