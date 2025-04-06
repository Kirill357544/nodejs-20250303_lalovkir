import { BadRequestException, Injectable } from "@nestjs/common";

@Injectable()
export class NotificationsService {
  sendEmail(to: string, subject: string, message: string): void {
    if (!to || !subject || !message) {
      throw new BadRequestException();
    }

    console.log(`Email sent to ${to}: ${subject} ${message}`);
  }

  sendSMS(to: string, message: string): void {
    if (!to || !message) {
      throw new BadRequestException();
    }

    console.log(`SMS sent to ${to}: ${message}`)
  }
}
