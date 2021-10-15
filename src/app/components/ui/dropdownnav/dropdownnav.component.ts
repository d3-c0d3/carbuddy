import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdownnav',
  templateUrl: './dropdownnav.component.html',
  styleUrls: ['./dropdownnav.component.scss']
})
export class DropdownnavComponent implements OnInit {

  constructor() { }
  @Input()show!:boolean;
  @Output() closeDropDown=new EventEmitter<boolean>();
  ngOnInit(): void {

  }
  onMouseHover():void{
    console.log("stay")
    //console.log(this.show);
    this.show=false;
    this.closeDropDown.emit(false);
  }

}
