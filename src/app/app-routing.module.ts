import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
// component
import { FirstComponent } from './first/first.component';
import { LoginComponent } from './login/login.component';
import { ParentComponent } from './parent/parent.component';
import { SecondComponent } from './second/second.component';
import { SliderComponent } from './slider/slider.component'
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: 'login-component', component: LoginComponent },
  { path: 'table-component', component: TableComponent },
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: 'slider-component', component: SliderComponent },
  { path: 'parent-component', component: ParentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
