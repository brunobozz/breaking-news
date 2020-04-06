import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoryes',
  templateUrl: './categoryes.component.html',
  styleUrls: ['./categoryes.component.scss']
})
export class CategoryesComponent implements OnInit {

  public categoryes: string[] = ["entertainment", "sports", "business", "health", "science", "technology"];

  constructor() { }

  ngOnInit(): void {
  }

  changeCategory(category){
    console.log(category);
  }

}
