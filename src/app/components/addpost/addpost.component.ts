import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';

import { Post } from 'src/app/interfaces/post';
import { PostService } from '../dashboard/post.service';
@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.scss']
})
export class AddpostComponent implements OnInit {

  private title:string="";
  private content:string="";
  private slug:string="";
  @Input () len:string="";
  @Output() newItemEvent=new EventEmitter<any>();
  
  constructor(private _postService:PostService) { }
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
      this.slug="";
    this.setContent("");
    }
    else{ 
      
    let newPost:Post={
      
    title:this.getTitle(),
    slug:this.getSlug(),
    author:"sufian",
    shortDescription:this.getContent(),
    body:"",
    image:"",
    priority: "",
    comment: null,
    };
    //newPost.id="1"
   // console.log(newPost)
   
   let x=this._postService.addNewPost(newPost)
   .subscribe(res=>{
     if(res.success){ 
       console.log(res)
       this.newItemEvent.emit();
        
    }

    },err=>{
      console.log(err)
    })
   
    this.setTitle("");
    this.slug="";
    this.setContent("");
  }
  }
  onSlugChange(event:any){
    this.slug=event.target.value;
  }
  getSlug(){
    return this.slug
  }
  
  onTitleChange(event:any):void{
    this.setTitle(event.target.value)
  }
  onContentChange(event:any):void{
    this.setContent(event.target.value)
  }


}
