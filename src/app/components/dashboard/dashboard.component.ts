import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  postList:Post[]=[];
  modalController:boolean=false;
  constructor() { 
   // console.log(this.post)
  }

  ngOnInit(): void {
  }
  closeModal(value:boolean):void{
    this.modalController=value;
    console.log(this.modalController)
  }
  addPost(post:Post):void{
    this.postList.push(post);
    // console.log(post)
  }
  editPost(index:number):void{
    //console.log(this.modalController)
    this.modalController=true;
    console.log(`${this.postList[index].title} editing`)
  }
  deletePost(index:number):void{
    this.postList.splice(index,1);
  }

}
