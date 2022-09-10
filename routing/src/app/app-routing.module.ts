import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ErrorComponent } from './error/error.component';
import { RoleGuard } from './guard/role.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'contact',
    pathMatch: 'full',
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'edit-contact/:contactid',
    component: EditContactComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [RoleGuard],
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
