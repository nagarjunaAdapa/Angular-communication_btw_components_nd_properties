import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sever-element',
  templateUrl: './sever-element.component.html',
  styleUrls: ['./sever-element.component.css']
})
export class SeverElementComponent implements OnInit {
 @Input("srvElement") element:{type:string,name:string,content:string}
  constructor() { }

  ngOnInit(): void {
  }

}
