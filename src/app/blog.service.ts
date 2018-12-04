import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blog;

  allBlogs = [
    {
      id: 1,
      title: "Low Expectations",
      createdOn: 1543563825474,
      author: "Mamulee",
      content: "Happiness is directly proportional to our expectations",
    },
    {
      id: 2,
      title: "2nd Noble Truth",
      createdOn: 1543732321568,
      author: "Mamulee",
      content: "Desire is the cause of suffering",
    },
    {
      id: 3,
      title: "Wu wei",
      createdOn: 154373238724,
      author: "Mamulee",
      content: "Try but don't force it",
    }
  ]

  constructor() {
    console.log("service started");
  }

  getBlogByID(id) {
    this.blog;
    for (this.blog of this.allBlogs) {
      if (this.blog.id == id) {
        return this.blog;
      } else {
        // console.log(this.blog.id);
        console.log("No");
      }
    }
  }
}
