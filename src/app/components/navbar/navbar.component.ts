import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menuItems: any[] = [];
  numberOfMails: number = 0;

  constructor(private localStorage: LocalStorageService, private mail: MailService) {

  }

  ngOnInit(): void {
    this.menuItems = [
      { url: '/home', icon: 'home' },
      { url: '/about', icon: 'info' },
      { url: '/services', icon: 'services' },
      { url: '/contact', icon: 'contact' },
    ];

    this.updateNumberOfMails();

  }

  effacerScore(): void {
    this.localStorage.clearLocalStorage();
  }

  updateNumberOfMails(): void {
    const mails = this.mail.getMails();
    if (mails) {
      const unreadMails = mails.filter(mail => !mail.statusReponse);
      this.numberOfMails = unreadMails.length;
    } else {
      this.numberOfMails = 0;
    }
  }
}


