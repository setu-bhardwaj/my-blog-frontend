import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';

//import observable related code (as per version 6)
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/do';


@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {

  public allBlogs;
  public currentBlog;

  //creating baseUrl
 //apiDOC :  https://blogapp.edwisor.com/apiDoc/
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  
  public authToken = 'MDA5NGMyMjQ2YzJkMDdlMWVjYmFjMTcxMzlhYWRmYjhiMzMwNzhmMWY0NTY0NjRmNzg5Yjc4NjY0Mjg3NTM3MWQ2MzMxYjU0YjhmY2MwNTlhMWFjN2JiY2FmMGNiYjQyYjU2NTQ4YjAyZjUzYjVkNjJlOGZkNDM2MzJlOWMyYzc0MA==';

  
  constructor(public _http: HttpClient) { 
    
    console.log('blog-http service is called');
  }//end constructor



  //exceptional handler
private handleError(err:HttpErrorResponse){
  console.log('Handle error http calls');
  console.log(err.message);
  return Observable.throw(err.message);
}
  //method to return all the blogs

 public getAllBlogs() :any {
   let myResponse = this._http.get(this.baseUrl+'/all?authToken='+this.authToken);
   console.log(myResponse);
 return myResponse;
  
}//getAllBlogs  


//method to get the particular blogs
public getSingleBlogInformation(currentBlogId) : any {
  let myResponse = this._http.get(this.baseUrl+'/view'+'/'+  currentBlogId +  '?authToken=' + this.authToken)
 return myResponse;

  /*
  for(let blog of this.allBlogs){
    if(blog.blogId == currentBlogId){
      this.currentBlog = blog;
    }
  }
  return this.currentBlog;
  */

}//getSingleBlogInformation

public createBlog(blogData):any {

  let myResponse = this._http.post(this.baseUrl + '/create' + '?authToken=' + this.authToken , blogData);
  return myResponse;
}//createBlog

public deleteBlog(blogId) {
  let data={};
  let myResponse = this._http.post(this.baseUrl + '/' + blogId + '/delete' + '?authToken=' + this.authToken,data);
  return myResponse;

}//delete blog

public editBlog(blogId,blogData) {
  let myResponse = this._http.put(this.baseUrl + '/' + blogId + '/edit' + '?authToken=' + this.authToken,blogData);
  return myResponse;

}//edit blog


}//end class
