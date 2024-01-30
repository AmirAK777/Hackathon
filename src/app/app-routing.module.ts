import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailGameComponent } from './components/mail-game/mail-game.component';
import { MailDetailComponent } from './components/mail-detail/mail-detail.component';

const routes: Routes = [
  { path: '', component: MailGameComponent }, 
  { path: 'detail/:id', component: MailDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
