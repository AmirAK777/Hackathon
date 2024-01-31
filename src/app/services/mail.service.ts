import { Injectable, OnInit } from '@angular/core';
import { Email } from '../models/email';
import { BehaviorSubject } from 'rxjs';
import { EMAILS } from '../models/email-data';
import { Player } from '../models/player';
import { LocalStorageService } from './local-storage.service';
import { JOUEUR } from '../models/email-data copy';

@Injectable({
  providedIn: 'root'
})
export class MailService {


  private joueur: Player[] = JOUEUR;

  private localStorageKey = 'mails';


  private mails: Email[] = EMAILS;


  constructor(private localStorageService: LocalStorageService) {
    if (!this.getMails()) {
      const defaultMails: Email[] = EMAILS; 
      this.setMails(defaultMails);
    }
  }

  setMails(emails: Email[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(emails));
  }

  getMails(): Email[] | null {
    const emailsJson = localStorage.getItem(this.localStorageKey);
    return emailsJson ? JSON.parse(emailsJson) : null;
  }


  getMailById(id: number): Email | undefined {
    const storedMails = this.getMails();
  
    if (storedMails) {
      return storedMails.find(email => email.id === id);
    }
  
    return undefined;
  }




  markResponseAsRead(emailId: number): void {
    const storedMails = this.getMails();
  
    if (storedMails) {
      const emailToUpdate = storedMails.find(email => email.id === emailId);
  
      if (emailToUpdate) {
        emailToUpdate.statusReponse = true;
        this.setMails(storedMails); // Mettez à jour les courriels dans le stockage local après la modification.
      }
    }
  }
}