import { Component, OnInit } from '@angular/core';
import { CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  cats:any = [];

  constructor(private catSer:CatService) { 
    catSer.getCats().subscribe( (c) => {
      this.cats = c;
    });
  }

  ngOnInit(): void {
  }

}
