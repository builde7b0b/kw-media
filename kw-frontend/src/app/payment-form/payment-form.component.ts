import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { loadStripe, Stripe, StripeCardElement, StripeElement, StripeElements } from '@stripe/stripe-js';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})

export class PaymentFormComponent implements OnInit {
  stripePromise = loadStripe('pk_test_51LXunxDehgflY7M5CwBLdS3Gx93qehw73hHxtJFpSBxp7T4KwewVgl7cOHsZ9BiyhMitAYl6fMvjmdaOvuNABea3005XjBvgId')
  card!: StripeCardElement;
  stripe!: Stripe;
  elements!: StripeElements;

  paymentForm = new FormGroup({
    amount: new FormControl('')
  });

  ngOnInit() {
    this.stripePromise.then(stripeJs => {
      if (stripeJs === null) {
        console.error('Stripe failed to initialize.');
        return;
      }
    
      this.stripe = stripeJs;
      this.elements = stripeJs.elements();
      this.card = this.elements.create("card");
      this.card.mount("#card-element");
    });
  }

  ngOnDestroy() {
    this.card.destroy();
  }

  async onSubmit() {
    const paymentData = this.paymentForm.value;

    if (!this.stripe || !this.elements) {
      console.error('Stripe has not been properly initialized.');
      return;
    }

    const { error, paymentMethod } = await this.stripe.createPaymentMethod({
      type: 'card',
      card: this.card
    });

    if (error) {
      console.error('Payment method error:', error);
    } else if (paymentMethod) {
      const response = await this.makePaymentRequest(Number(paymentData.amount), paymentMethod.id);
      if (response.success) {
        console.log('Payment successful!');
        // Redirect or show success message
      } else {
        console.error('Payment failed:', response.error);
        // Show error message
      }
    }
  }

  async makePaymentRequest(amount: number, paymentMethodId: string): Promise<any> {
    // Implement your server-side logic or communicate with Stripe's APIs here to complete the payment request
    // Return the payment response from your server
  }
}
