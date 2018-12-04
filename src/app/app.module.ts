import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { BlogService } from './blog.service';
import { ViewBlogComponent } from './view-blog/view-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    CreateBlogComponent,
    ViewBlogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'about', component: AboutComponent },
      { path: 'create', component: CreateBlogComponent },
      { path: 'blog/:ID', component: ViewBlogComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
