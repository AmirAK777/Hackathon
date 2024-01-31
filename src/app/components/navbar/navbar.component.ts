import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menuItems: any[] = [];

  constructor(private localStorage: LocalStorageService) {

  }

  ngOnInit(): void {
    // Example menu items
    this.menuItems = [
      { url: '/home', icon: 'home' },
      { url: '/about', icon: 'info' },
      { url: '/services', icon: 'services' },
      { url: '/contact', icon: 'contact' },
    ];
  }

  effacerScore(): void {
    this.localStorage.clearLocalStorage();
  }
}