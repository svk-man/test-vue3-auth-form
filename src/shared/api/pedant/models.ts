export const USER_FIELDS = {
  ID: 'Id',
  AVATAR: 'Avatar',
  CUSTOMER_NAME: 'CustomerName',
  CUSTOMER_PHONE: 'CustomerPhone'
} as const;

export type User = {
  [USER_FIELDS.ID]: number,
  [USER_FIELDS.AVATAR]: string,
  [USER_FIELDS.CUSTOMER_NAME]: string,
  [USER_FIELDS.CUSTOMER_PHONE]: string,
};