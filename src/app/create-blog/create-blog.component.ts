import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {

  authToken;

  title;
  description;
  blogBody;
  category;

  constructor(public blogHttpService: BlogHttpService) {
  }

  ngOnInit() {

  }

  createBlog() {
    let blogData = {
      title: this.title,
      description: this.description,
      blogBody: this.blogBody,
      category: this.category
    }
    console.log(blogData);
    this.blogHttpService.createBlog(blogData).subscribe(
      data => {
        console.log("blog created");
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

}
