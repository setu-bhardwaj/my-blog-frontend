import { Component, OnInit, OnDestroy } from '@angular/core';

//importing route related code 
import { ActivatedRoute,Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import { Location } from '@angular/common';
//import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers: [Location] //since required in this component only so local providers
})
export class BlogViewComponent implements OnInit,OnDestroy {

  public currentBlog;  

  constructor(private _route: ActivatedRoute, private router: Router, private blogService: BlogService, 
    private blogHttpService: BlogHttpService, private location: Location
     ) {
      //private toastr: ToastsManager, vcr: ViewContainerRef
    //this.toastr.setRootViewContainerRef(vcr);

  }
  ngOnInit() {
  console.log("blog view ng oninit called");

  //getting blod id from blog
  let myBlogId = this._route.snapshot.paramMap.get('blogId');
  console.log(myBlogId);

  //calling function to get particulat blog info
  //this.blogService.getSingleBlogInformation(myBlogId);
  //this.currentBlog = this.blogService.getSingleBlogInformation(myBlogId);
  this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(

    data =>{
      console.log('logging data');
      console.log(data);
      this.currentBlog=data["data"];
    },
    error =>{
      console.log('some error occured');
    console.log(error.errorMessage);
    }
  )
 // console.log(this.currentBlog);  
  

  }//ng on init

  deleteThisBlog(): any {

    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(

      data => {
        console.log(data);
        console.log('Blog Deleted successfully');
        alert ('Blog Deleted successfully');
        //this.toastr.success('Blog Deleted successfully', 'Success!');
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1000)

      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
        alert ('some error occured');
       // this.toastr.error('Some error occured', 'Error');
      }
    )
    }// end delete this blog 

  goBackToPreviousPage(): any {
    this.location.back();
  }

  ngOnDestroy() {
    console.log('home component ngOnDestroy is called');
  }

  
  /* inclduing in service now
/*
  public getSingleBlogInformation(currentBlogId) : any {

    for(let blog of this.allBlogs){
      if(blog.blogId == currentBlogId){
        this.currentBlog = blog;
      }
    }
    console.log(this.currentBlog);
  }//end getSingleBlogInformation
*/
 
}
