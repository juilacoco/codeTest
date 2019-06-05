import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { DisplayUserComponent } from './display-user/display-user.component';

const routes: Routes = [
  {path: 'form', component:FormComponent},
  {path: 'displayUserInform', component:DisplayUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
