import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { AppService } from './app.service';
import { TestComponentComponent } from './test-component/test-component.component';
import { AllusersComponent } from './allusers/allusers.component';
import { AllpostComponent } from './allpost/allpost.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserTableComponent,
    Multiply2Pipe,
    MarkListComponent,
    LifeCycleComponent,
    TestComponentComponent,
    AllusersComponent,
    AllpostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LoginModule,
    DashboardModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
