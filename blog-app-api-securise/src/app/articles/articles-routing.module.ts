import { AuthGuardService as AuthGuard} from './../core/services/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { ShowdetailsComponent } from './components/showdetails/showdetails.component';
import { NewArticleComponent } from './components/new-article/new-article.component';
import { RouterModule } from '@angular/router';
import { RoleGuardService } from '../core/services/role-guards.service';





const routes: Routes = [
    { path: 'create', component: NewArticleComponent , canActivate: [AuthGuard],
    data: {  
        expectedRole: "ROLE_ADMIN"
    }},
    { path:':id' , component: ShowdetailsComponent },
    { path: '', component: BlogDetailComponent }
  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)

],
  exports: [RouterModule]
})
export class ArticlesRoutingModule {}