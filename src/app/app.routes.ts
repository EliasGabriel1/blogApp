
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AboutComponent } from './about/about.component';
import { FullComponent } from './layout/full/full.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';


// import { AppsComponent } from './app.component';


export  const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', component: BlogComponent },
      { path: 'blogDetail/:id', component: BlogDetailComponent },
      { path: 'about', component: AboutComponent },
    ]
  }
];
