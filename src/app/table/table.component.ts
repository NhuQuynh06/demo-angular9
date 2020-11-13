import { Component, OnInit } from '@angular/core';
import {APIServiceService } from '../../app/api-service.service';



export interface Data {
  userId: string;
  Id: number;
  title: number;
  completed: boolean;
}

const ELEMENT_DATA: Data[] = [
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'userId', 'title', 'completed'];
  
  dataSource : any[] = [];
  constructor(private service : APIServiceService){
    this.service.getData().then(data => {
      this.dataSource = data;
    });
  }

  ngOnInit(): void {
  }

}
