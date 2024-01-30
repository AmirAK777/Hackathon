import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menuItems: any[] = [];

  ngOnInit(): void {
    // Example menu items
    this.menuItems = [
      { url: '/home', icon: 'home' },
      { url: '/about', icon: 'info' },
      { url: '/services', icon: 'services' },
      { url: '/contact', icon: 'contact' },
    ];
  }
}