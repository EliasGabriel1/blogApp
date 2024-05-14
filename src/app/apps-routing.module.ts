import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { FullComponent } from './layout/full/full.component';
import { TesteComponente01Component } from './teste-componente01/teste-componente01.component';
// import { AppsComponent } from './apps.component';


const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', component: BlogComponent },
      { path: 'blogDetail/:id', component: BlogDetailComponent },
      { path: 'about', component: AboutComponent },
      { path: 'teste', component: TesteComponente01Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
