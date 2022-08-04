import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlogComponent } from './userlog/userlog.component';


const routes: Routes = [
  { path: 'login', component: UserlogComponent},
  { path: 'article', loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule) },
  { path: '', component: LandingPageComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
