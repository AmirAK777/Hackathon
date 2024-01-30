import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Email } from 'src/app/models/email';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-mail-detail',
  templateUrl: './mail-detail.component.html',
  styleUrls: ['./mail-detail.component.css']
})
export class MailDetailComponent {

  mail: Email | undefined;

  constructor(private route: ActivatedRoute, private mailService: MailService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const mailId = Number(params.get('id'));
      this.mail = this.mailService.getMailById(mailId);
    });
  }
}