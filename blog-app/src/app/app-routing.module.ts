import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { ShowdetailsComponent } from './showdetails/showdetails.component';



const routes: Routes = [
  { path: 'article', component: BlogDetailComponent },
  { path: '', component: LandingPageComponent },
  { path:'articles/:id' , component: ShowdetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
