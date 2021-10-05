import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';

import { Post } from 'src/app/interfaces/post';
@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.scss']
})
export class AddpostComponent implements OnInit {

  private title:string="";
  private content:string="";
  @Input () len:string="";
  @Output() newItemEvent=new EventEmitter<Post>();
  
  constructor() { }
  //setters
  setTitle(title:string):void{
    this.title=title;
  }
  setContent(content:string):void{
    this.content=content;
  }
  //getters
  getTitle():string{
    return this.title;
  }
  getContent():string{
    return this.content;
  }
  ngOnInit(): void {
  }
  toggleAddPost():void{
    if(this.getContent().trim()==="" &&this.getTitle().trim()===""){
      console.log("Invalid Input")
      this.setTitle("");
    this.setContent("");
    }
    else{ 
      console.log(this.len);
    let newPost:Post={
      id:1,
      title: this.getTitle(),
      content: this.getContent()
    };
    //newPost.id="1"
   // console.log(newPost)
    this.newItemEvent.emit(newPost);
    this.setTitle("");
    this.setContent("");
  }
  }
  
  onTitleChange(event:any):void{
    this.setTitle(event.target.value)
  }
  onContentChange(event:any):void{
    this.setContent(event.target.value)
  }


}
