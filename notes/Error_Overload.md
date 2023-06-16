No overload matches this call.
  Overload 1 of 3, '(paymentMethodData: CreatePaymentMethodData): Promise<PaymentMethodResult>', gave the following error.
    Type '{ number: string | null | undefined; exp_month: string | null | undefined; exp_year: string | null | undefined; cvc: string | null | undefined; }' is not assignable to type 'StripeCardElement | StripeCardNumberElement | { token: string; }'.
      Object literal may only specify known properties, and 'number' does not exist in type 'StripeCardElement | StripeCardNumberElement | { token: string; }'.
  Overload 2 of 3, '(options: CreatePaymentMethodFromElements): Promise<PaymentMethodResult>', gave the following error.
    Argument of type '{ type: string; card: { number: string | 



The error you're encountering is related to the incompatible type in the card object passed to stripe.createPaymentMethod(). To resolve this error, you need to use the appropriate properties and types expected by the Stripe API


const { error, paymentMethod } = await stripe.createPaymentMethod({
  type: 'card',
  card: {
    number: paymentData.cardNumber,
    exp_month: paymentData.expMonth,
    exp_year: paymentData.expYear,
    cvc: paymentData.cvc
  } as CreatePaymentMethodData['card']
});