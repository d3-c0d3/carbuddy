import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/interfaces/post';
import {map} from 'rxjs/operators';
@Injectable()
export class PostService {
   BASEURL:string="http://localhost:7100/api/v1/blog/";

  constructor(private http:HttpClient) { }
  getAllPosts(){
    return this.http.get<{success: boolean; data: Post[]; count: number}>(this.BASEURL+"get-all-blogs");
  } 
   
  addNewPost(data:Post){
    return this.http.post<{success: boolean; data: Post[]; count: number}>(this.BASEURL+'add-blog', data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  updatePost(data: any){
    return this.http.put<{success: boolean; data: Post[]; count: number}>(this.BASEURL+'edit-blog-by-id/', data).pipe(map((res:any)=>{
       
      return res;
    }));
  }
  deletePostByID(id:any){
    return this.http.delete<{success: boolean; data: Post[]; count: number}>(this.BASEURL+'delete-blog-by-id/'+id).pipe(map((res:any)=>{
      return res;
    }));
  }
  getPostByID(id:any){
    console.log(id)
    return this.http.get<{success: boolean; data: Post[]; count: number}>(this.BASEURL+'get-blog-by-blog-id/'+id).pipe(map((res:any)=>{
      console.log(res)
      
      return res;
    }));
  }
}
