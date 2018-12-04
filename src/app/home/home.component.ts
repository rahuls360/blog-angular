import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allBlogs;
  blogService;

  constructor(blogService: BlogService) {
    this.blogService = blogService;
  }

  ngOnInit() {
    this.allBlogs = this.blogService.allBlogs;
    console.log(this.allBlogs);
  }




}
