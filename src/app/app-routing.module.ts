import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailViewComponent } from './components/detail-view/detail-view.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [{
  path:'detail-view/:id',component:DetailViewComponent},

{
  path:'home',component:HomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
