import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersLayoutComponent } from './layouts/users-layout/users-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const routes: Routes = [
 {path:'', component: UsersLayoutComponent, children:[
    {path:'',loadChildren:()=>import('./Views/Users/home/home.module').then(m=>m.HomeModule)},
    {path:'userLogin',loadChildren:()=>import('./Views/Users/login-user/login-user.module').then(m=>m.LoginUserModule)},

 ]},



 {path:'admin', component: AdminLayoutComponent,children:[
  {path:'dashbord',loadChildren:()=>import('./Views/Admin/dashbord/dashbord.module').then(m=>m.DashbordModule)},
  {path:'adminLogin',loadChildren:()=>import('./Views/Admin/login/login.module').then(m=>m.LoginModule)}

]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
