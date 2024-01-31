import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/models/email';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-mail-game',
  templateUrl: './mail-game.component.html',
  styleUrls: ['./mail-game.component.css']
})
export class MailGameComponent implements OnInit {

  mails: Email[] = [];

  constructor(private mailService: MailService) { }

  ngOnInit(): void {
    const fetchedMails = this.mailService.getMails();

    if (fetchedMails !== null) {
      this.mails = fetchedMails;
      console.log(this.mails);
    } else {
      console.error("Failed to fetch emails from the service.");
    }
  }
}
