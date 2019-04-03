import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
public currentBlog;

// now calling via API
  public allBlogs = [
    {
      "blogId": "hz15AcA_9",
      "lastModified": "2019-02-11T14:22:35.496Z",
      "created": "2019-02-11T14:22:35.496Z",
      "tags": [],
      "author": "Pratik Deshmukh",
      "category": "Technical",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "POSTMAN ROCKS..!!<h5>",
      "description": "this is blog created directly using  api description has been edited ",
      "title": "Blog using Postman"
    },
    {
      "blogId": "czxoZVz5z",
      "lastModified": "2019-01-10T18:48:53.638Z",
      "created": "2019-01-10T18:48:53.638Z",
      "tags": ["Comedy","Horror","NewCat"],
      "author": "Deepthi Kasturi",
      "category": "hfgdfd",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "Yes edit",
      "description": "Yes edited",
      "title": "sdasda"
    },
    {
      "blogId": "HtGjJyLSz",
      "lastModified": "2019-01-12T15:05:26.853Z",
      "created": "2019-01-12T15:05:26.853Z",
      "tags": [],
      "author": "Deepthi Kasturi",
      "category": "Uncategorized",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "D3",
      "description": "D2",
      "title": "D1"
    }]

    constructor() {
      console.log('blog service constructor is called');
      
     }
     

//method to return all the blogs
    public getAllBlogs():any{
      return this.allBlogs;
    }//getAllBlogs


//method to get the particular blog
    public getSingleBlogInformation(currentBlogId) : any {

      for(let blog of this.allBlogs){
        if(blog.blogId == currentBlogId){
          this.currentBlog = blog;
        }
      }
      return this.currentBlog;


     // console.log(this.currentBlog);
    }//end getSingleBlogInformation



}
