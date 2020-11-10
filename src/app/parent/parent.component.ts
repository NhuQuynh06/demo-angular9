import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent implements OnInit {
  value = '';
  valueSlider : number;
  constructor() { }
  
  ngOnInit(): void {
    
  }
  some(e){
    this.value = e;
  }
  
  toSlider(e) {
    this.valueSlider = e
  }
  

}
