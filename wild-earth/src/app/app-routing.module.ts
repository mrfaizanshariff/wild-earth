import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from 'src/pages/activities/activities.component';
import { ContactComponent } from 'src/pages/contact/contact.component';
import { HomeComponent } from 'src/pages/home/home.component';
import { ReviewComponent } from 'src/pages/review/review.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },{
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'review',
    component:ReviewComponent
  },
  {
    path:'activities',
    component:ActivitiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
