export type PaymentError = {
  message: string;
};

export type ChargePaymentArgs = {
  cardInfo: string;
  amount: number;
};

export type ChargePaymentResponse = {
  success: boolean;
  message?: string;
};
