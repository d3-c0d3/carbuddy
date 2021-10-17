import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../dashboard/post.service';
@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.scss']
})
export class PostdetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute, private _postService:PostService) { }
  public postBody:string="";
  ngOnInit(): void {
    let id=this.route.snapshot.paramMap.get('id');
    this._postService.getPostByID(id)
    .subscribe(data=>{
      this.postBody=data.data.body;
    })
  }

}
