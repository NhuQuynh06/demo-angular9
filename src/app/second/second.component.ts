import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})

export class SecondComponent implements OnInit {
  public text: string = "https://itsolutionstuff.com/";
  public MyArrayType = [
    'value1',
    'value2',
    'value3',
    'value4',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
