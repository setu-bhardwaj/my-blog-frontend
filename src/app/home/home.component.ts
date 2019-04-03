//this is by default statement
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit,OnDestroy {
  
 public allBlogs;

  
  //dummy blog variable
/*
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
      "bodyHtml": "POSTMAN ROCKS..!!",
      "description": "this is blog created directly using  api description has been edited ",
      "title": "Blog using Postman"
    },
    {
      "blogId": "czxoZVz5z",
      "lastModified": "2019-01-10T18:48:53.638Z",
      "created": "2019-01-10T18:48:53.638Z",
      "tags": [],
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
    
*/
  
    constructor(public blogservice: BlogService,public BlogHttpService : BlogHttpService ) { 
 
    console.log('home component constructor is called');
  }

  ngOnInit() {
    console.log('home component ngonit is called');
   // this.allBlogs =  this.blogservice.getAllBlogs();
   this.allBlogs=this.BlogHttpService.getAllBlogs;

//handling observables
this.allBlogs = this.BlogHttpService.getAllBlogs().subscribe(

  data =>{
    console.log('logging data');
    console.log(data);
    this.allBlogs=data["data"];
  },
  error =>{
    console.log('some error occured');
  console.log(error.errorMessage);
  }
)
    //console.log(this.allBlogs);
  }

  ngOnDestroy() {
    console.log('home component ngOnDestroy is called');
  }
}
