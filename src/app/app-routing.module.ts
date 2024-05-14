import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { FullComponent } from './apps/layout/full/full.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', loadChildren: () => import('./apps.module').then(m => m.AppsModule) },
      // { path: 'coe', component: FullComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
