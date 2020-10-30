import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName:string,serverContent:string}>();

      @ViewChild('serverNameInput',{static:true}) serverNameInput : ElementRef; 
      @ViewChild('serverContentInput',{static:true}) serverContentInput : ElementRef;
 // newServerName = '';
 // newServerContent = '';
  
  constructor() { }

  ngOnInit(): void {
  }

    //USING DATABINDING
    // onAddServer() {
    //   this.serverCreated.emit(
    //     {
    //     serverName:this.newServerName,
    //     serverContent:this.newServerContent
    //   });
    // }
  
     
    // onAddBlueprint() {
    //   this.blueprintCreated.emit(
    //     {
    //       serverName:this.newServerName,
    //      serverContent:this.newServerContent
    //     });
    // }


  //     //using local reference
  // onAddServer(nameInput:HTMLInputElement,contentInput:HTMLInputElement) {
  //   this.serverCreated.emit(
  //     {
  //     serverName:nameInput.value,
  //     serverContent:contentInput.value
  //   });
  // }

  // //using local reference
  // onAddBlueprint(nameInput:HTMLInputElement,contentInput:HTMLInputElement) {
  //   this.blueprintCreated.emit(
  //     {
  //       serverName:nameInput.value,
  //       serverContent:contentInput.value
  //     });
  // }



    //using @ViewChild()
    onAddServer() {
      this.serverCreated.emit(
        {
        serverName:this.serverNameInput.nativeElement.value,
        serverContent:this.serverContentInput.nativeElement.value
      });
    }
  
    //using @ViewChild()
    onAddBlueprint() {
      this.blueprintCreated.emit(
        {
          serverName:this.serverNameInput.nativeElement.value,
          serverContent:this.serverContentInput.nativeElement.value
        });
    }
  

}
