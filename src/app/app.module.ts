import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { BlogService } from './blog.service';
import { ViewBlogComponent } from './view-blog/view-blog.component';
import { BlogHttpService } from './blog-http.service';
import { EditBlogComponent } from './edit-blog/edit-blog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    CreateBlogComponent,
    ViewBlogComponent,
    EditBlogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'about', component: AboutComponent },
      { path: 'create', component: CreateBlogComponent },
      { path: 'blog/:ID', component: ViewBlogComponent },
      { path: 'blog/:ID/edit', component: EditBlogComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [BlogService, BlogHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
