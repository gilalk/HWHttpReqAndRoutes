import { Component, OnInit } from '@angular/core';
import { FoxService } from 'src/app/services/fox.service';

@Component({
  selector: 'app-fox',
  templateUrl: './fox.component.html',
  styleUrls: ['./fox.component.css']
})
export class FoxComponent implements OnInit {

  foxes: any = {};

  constructor(private foxSer:FoxService) { 
    foxSer.getFoxes().subscribe( (f) => {
      this.foxes = f;
    });
  }

  ngOnInit(): void {
  }

}
