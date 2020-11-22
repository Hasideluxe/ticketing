import { Publisher, OrderCancelledEvent, Subjects } from '@sbhtickets/common'

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}