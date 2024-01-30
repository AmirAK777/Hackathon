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
    this.mails = this.mailService.getAllMails();
    console.log(this.mails)
  }
}