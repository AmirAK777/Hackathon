import { Injectable } from '@angular/core';
import { Email } from '../models/email';
import { BehaviorSubject } from 'rxjs';
import { EMAILS } from '../models/email-data';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  private mails: Email[] = EMAILS;

  
  constructor() { }

  getAllMails(): Email[] {
    return this.mails;
  }

  getMailById(id: number): Email | undefined {
    return this.mails.find(email => email.id === id);
  }

}