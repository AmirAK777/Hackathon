import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-minibar',
  templateUrl: './minibar.component.html',
  styleUrls: ['./minibar.component.css']
})
export class MinibarComponent implements OnInit {

  points: number = 0;

  constructor(private localS: LocalStorageService) { }
  
  ngOnInit(): void {
    this.points = this.localS.getPlayerPoints();
  }

  

}
