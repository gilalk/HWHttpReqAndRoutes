import { Component, OnInit } from '@angular/core';
import { DogService } from 'src/app/services/dog.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  dogs:any={};
  isSubmitted:boolean = false;

  constructor(private dogSer:DogService) { 
    dogSer.getDogs().subscribe((dogs) => {
      this.dogs = dogs;
    })
  }

  ngOnInit(): void {
  }

  onGetPic(){
    this.isSubmitted = !this.isSubmitted;
  }

}
