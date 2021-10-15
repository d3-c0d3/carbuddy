import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  showCarSmarts:boolean=false;
  showReview:boolean=false;
  openDropDown:boolean=false;
  @Input() closeDropDown:boolean=false;
  ngOnInit(): void {
  }
  /* onHover():void{
    console.log("e")
    this.showDropDown=true;
  } */
  /* onMouseout():void{
    this.showCarSmarts=false;
    this.showReview=false;
  } */
  dropDownController(value:boolean){
    this.openDropDown=value;
    
    return this.openDropDown;
  }
  closeDropDownnav(value:boolean){
    this.openDropDown=value;
    console.log(value)
    return this.openDropDown;
  }
  
}
