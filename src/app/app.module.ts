import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MailGameComponent } from './components/mail-game/mail-game.component';
import { MailDetailComponent } from './components/mail-detail/mail-detail.component';
import { MinibarComponent } from './components/minibar/minibar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MailGameComponent,
    MailDetailComponent,
    MinibarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
