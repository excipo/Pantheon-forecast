import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForecastComponent } from './forecast/forecast.component'
import { GraphComponent } from './graph/graph.component';
import { HeatIndexComponent } from './heat-index/heat-index.component';

const routes: Routes = [
  { path: 'forecast', component: ForecastComponent },
  { path: 'graph', component: GraphComponent},
  { path: 'heat-index', component: HeatIndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
