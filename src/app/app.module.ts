import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//router module used for settingup the application level route
import {RouterModule, Routes} from '@angular/router';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BlogViewComponent } from './blog-view/blog-view.component';

import { HttpClientModule } from '@angular/common/http';
//import statement for service
import { BlogService } from './blog.service';

import { BlogHttpService } from './blog-http.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';





//decorators
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    //ToastModule.forRoot(),
    ToastrModule.forRoot(),
    RouterModule.forRoot([
  {path : 'home' , component: HomeComponent},
  {path : '',redirectTo:'home',pathMatch:'full'},
  {path: 'about' , component :AboutComponent},
  {path: 'blog/:blogId',component : BlogViewComponent},
  {path:'create',component : BlogCreateComponent},
  {path : 'edit/:blogId', component : BlogEditComponent},
  {path:'**',component:NotFoundComponent}

    ])
  ],
  providers: [BlogService,BlogHttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
