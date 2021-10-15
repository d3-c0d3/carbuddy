import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.scss']
})
export class BackdropComponent implements OnInit {
  @Input () show:boolean=false;
  @Output() backDropController=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  closeBackDrop():void{
    
    this.backDropController.emit();
    console.log("BD click")
  }
}
