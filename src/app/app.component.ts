import { Component, OnInit } from '@angular/core';
import { GetPostsService } from './get-posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private loadPosts: GetPostsService){
  }
  
  posts:any;

  ngOnInit(){
    this.loadPosts.getPosts().subscribe(data => {
      this.posts = data
      console.log(this.posts);
    }
  );
  }

 
}
