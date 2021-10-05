import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.scss']
})
export class BackdropComponent implements OnInit {
  @Input () show:boolean=false;
  @Output() backDropController=new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  toggleBackdrop():void{
    this.show=false;
    this.backDropController.emit(this.show);
    console.log("BD click")
  }
}
