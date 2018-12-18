import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent implements OnInit {

  blog;
  id;

  constructor(private _route: ActivatedRoute, private router: Router, public blogHttpService: BlogHttpService, private toastr: ToastrService) {

  }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('ID');
    console.log(this.id);
    this.blog = this.blogHttpService.getBlogByID(this.id).subscribe(
      data => {
        this.blog = data["data"];
      },
      error => {
        console.log(error);
        console.log(error.errmessage);
      }
    );
  }

  deleteBlog() {
    this.blogHttpService.deleteBlog(this.id).subscribe(
      data => {
        console.log(data);
        this.toastr.success('Blog is deleted', 'Congrats');
      },
      error => {
        console.log("error", error);
      }
    )
  }

}