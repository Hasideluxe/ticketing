import { Subjects, Publisher, PaymentCreatedEvent } from '@sbhtickets/common'

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}