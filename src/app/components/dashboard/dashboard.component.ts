import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { PostService } from './post.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public postList:Post[]=[];
  postModalController:boolean=false;

  editModalController:boolean=false;
  backdropController:boolean=false;
  editedPost:string="";
  editedTitle:string="";
  newPost:Post={
      
    title:"",
    slug:"",
    author:"",
    shortDescription:"",
    body:"",
    image:"",
    priority: "",
    comment: null,
    };
  

  constructor(private _postService:PostService,private router:Router) { 
    
  }
  ngOnInit() {
    console.log("init called")
    this.fetchPost()
  }
  
  /* modal and backdrop controller */
  closeModal():void{
   this.backdropController=false;
   this.postModalController=false;
   this.editModalController=false;
  }
  openPostModal(){
    this.backdropController=true;
    this.postModalController=true;
  }
  openEditModal(){
    
    this.backdropController=true;
    this.editModalController=true;
  }
  /* post controller */
  fetchPost(){
    this._postService.getAllPosts()
    .subscribe((data)=> { this.postList=data.data
      console.log(data.data)}) 
  }
  addNewBlog(){
    this.openPostModal()
  }
  postAdded(){
    this.fetchPost()
    this.closeModal()
  }
  editPost(id:any):void{
   
    this.openEditModal()
    console.log(id)
    this._postService.getPostByID(id)
    .subscribe((data)=> { 
      this.newPost= data.data;
      this.editedPost=data.data.shortDescription;
      this.editedTitle=data.data.title;
      })
      
  }
  deletePost(id:any):void{
    this._postService.deletePostByID(id)
    .subscribe(res=>{
      if(res.success){ 
      console.log(res)
      this.fetchPost()
        
    }

    },err=>{
      console.log(err)
    })
  }
  updatePost(title:any,content:any){
    this.closeModal(); 
    this.newPost.title=title.value;
    this.newPost.shortDescription=content.value;
    this._postService.updatePost(this.newPost)
    .subscribe(res=>{
      if(res.success){ 
      console.log(res)
      this.fetchPost()
        
    }

    },err=>{
      console.log(err)
    })
}
viewPostDetails(post:Post){
  this.router.navigate(['/postdetails',post._id])
}
}