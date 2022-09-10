import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [DashboardComponent, TableComponent],
  imports: [DashboardRoutingModule],
  providers: [],
})
export class DashboardModule {}
