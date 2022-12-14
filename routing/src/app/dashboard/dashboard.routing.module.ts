import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from '../guard/role.guard';
import { ChartComponent } from './chart/chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivateChild: [RoleGuard],
    children: [
      {
        path: 'table',
        component: TableComponent,
      },
      {
        path: 'chart',
        component: ChartComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
