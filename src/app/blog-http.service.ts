import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {
  public allBlogs;
  public blog;
  public baseUrl = "https://blogapp.edwisor.com/api/v1/blogs";
  public authToken = "OGVjZTQxZmViZTgwYTEzMWY0OTc1OGRlN2Y4ZjQ5N2Q1M2ZjMTJlMjY1YjAzNGIwM2RhNTdlNmNhNzJlYTRhNWUxZjFhNDVhOTIzMDJjMTU2YTVmYmJmYzBmNWUxZGYxZTc5OGU3NTU5Y2M3NGJhZGMyZWRmMjY1MzAwMjFmYTdlOA==";

  constructor(private _http: HttpClient) {
    console.log("blog http service started");
  }

  getAllBlogs() {
    let response = this._http.get(this.baseUrl + "/all?authToken=" + this.authToken);
    console.log(response);
    return response;
  }

  getBlogByID(id) {
    let url = this.baseUrl + "/view/" + id + "?authToken=" + this.authToken;
    let response = this._http.get(url);
    // console.log(url);
    return response;
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

  createBlog(blogData) {
    let url = this.baseUrl + "/create?authToken=" + this.authToken;
    console.log(url);
    let response = this._http.post(url, blogData);
    return response;
  }

  editBlog(id, blogData) {
    let url = this.baseUrl + "/" + id + "/edit?authToken=" + this.authToken;
    console.log(url);
    let response = this._http.put(url, blogData);
    return response;
  }

  deleteBlog(id) {
    let url = this.baseUrl + "/" + id + "/delete?authToken=" + this.authToken;
    let response = this._http.post(url, id);
    console.log(url, id, "Deleted");
    return response;
  }

}
