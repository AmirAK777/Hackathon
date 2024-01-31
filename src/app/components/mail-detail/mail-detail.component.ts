import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Email } from 'src/app/models/email';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-mail-detail',
  templateUrl: './mail-detail.component.html',
  styleUrls: ['./mail-detail.component.css']
})
export class MailDetailComponent {

  mail: Email | undefined;
  answerMessage: string | undefined;
  buttonClicked = false;

  constructor(private route: ActivatedRoute, private mailService: MailService, private local: LocalStorageService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const mailId = Number(params.get('id'));
      this.mail = this.mailService.getMailById(mailId);
    });

  }

  gagnerPoints(point: number): void {
    this.local.gagnePoints(point);
  }

  perduPoints(point: number): void {
    this.local.perdrePoints(point);
  }

  checkScam(isScam: boolean): void {
    if (this.mail) {
      if (this.mail.scams === isScam) {
        this.answerMessage = 'Gagné ! ';
        this.gagnerPoints(10)
      } else {
        this.answerMessage = 'Perdu !';
        this.perduPoints(10)
      }
      this.mailService.markResponseAsRead(this.mail.id)
    }
  }


}