import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserTableComponent } from './user-table/user-table.component';
import { Multiply2Pipe } from './multiply2.pipe';
import { MarkListComponent } from './mark-list/mark-list.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserTableComponent,
    Multiply2Pipe,
    MarkListComponent,
    LifeCycleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LoginModule,
    DashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
