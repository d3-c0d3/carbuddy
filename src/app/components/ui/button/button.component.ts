import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() buttonname: string="";
  @Output () btnClick = new EventEmitter();
  constructor() 
  {
   }

  ngOnInit(): void {
  }
  onClick():void{
    this.btnClick.emit();
  }

}
