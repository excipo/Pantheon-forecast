import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { GraphComponent } from './graph/graph.component';
import { HeatIndexComponent } from './heat-index/heat-index.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'graph', component: GraphComponent},
  { path: 'heat-index', component: HeatIndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
