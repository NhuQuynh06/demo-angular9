import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
// component
import { FirstComponent } from './first/first.component';
import { ParentComponent } from './parent/parent.component';
import { SecondComponent } from './second/second.component';
import { SliderComponent } from './slider/slider.component'

const routes: Routes = [
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
