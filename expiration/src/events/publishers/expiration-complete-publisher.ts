import { Publisher, Subjects, ExpirationCompleteEvent } from '@sbhtickets/common'

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}