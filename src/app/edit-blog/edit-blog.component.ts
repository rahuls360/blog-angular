import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {

  blog;
  id;

  constructor(public _route: ActivatedRoute, private router: Router, public blogHttpService: BlogHttpService, public toastr: ToastrService) { }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get("ID");
    this.blogHttpService.getBlogByID(this.id).subscribe(
      data => {
        console.log(data["data"]);
        this.blog = data["data"];
      },
      error => {
        console.log(error);
      }
    );
    console.log(this.blog);
  }

  editBlog() {
    console.log(this.id, this.blog);
    this.blogHttpService.editBlog(this.id, this.blog).subscribe(
      data => {
        console.log(data);
        this.toastr.success("Edited succesfully", "Congrats");
        this.router.navigate(['/blog', this.id]);
      },
      error => {
        console.log(error);
        console.log("error");
      }
    );
  }


}
