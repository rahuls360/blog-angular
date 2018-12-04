import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent implements OnInit {

  blog;
  id;

  constructor(private _route: ActivatedRoute, private router: Router, public blogService: BlogService) {

  }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('ID');
    this.blog = this.blogService.getBlogByID(this.id);
  }

}