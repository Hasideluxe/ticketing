import { Publisher, OrderCreatedEvent, Subjects } from '@sbhtickets/common'

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}