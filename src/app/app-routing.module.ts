import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAccessGuard } from './admin-access.guard';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { AdminGuard } from './admin.guard';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { ClientsComponent } from './clients/clients.component';
import { LeadsComponent } from './leads/leads.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchComponent } from './search/search.component';
import { SuperAdminGuard } from './super-admin.guard';
import {SettingsCheckGuard  } from './settings-check.guard'; 
import {UnsavedGuard  } from './unsaved.guard'; 
import {ResolverGuard  } from './resolver.guard'; 




const routes: Routes = [
  {path : '', redirectTo : 'leads', pathMatch : 'full'},
  {
    path : 'leads',
    component : LeadsComponent, 
    resolve: {
      data : ResolverGuard
    }
  },
  {
    path : 'admin',  canActivateChild : [AdminAccessGuard],
    children : [
      {
        path : '', component : AdminComponent, canActivate : [SuperAdminGuard]
      },
      {path : 'edit', component : AdminEditComponent},
      {path : 'delete', component : AdminDeleteComponent},
      {path : 'manage', component : AdminManageComponent}
    ]
  },
  {path : 'clients', component : ClientsComponent, canActivate : [AuthGuard, AdminGuard]}, //all the guards in the aarray must resolve to true to give an output. they'll be checked seqquentially.
  {path : 'search', component : SearchComponent, canDeactivate : [UnsavedGuard]},
  { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },
  { path: 'settings',
    canLoad : [SettingsCheckGuard],
     loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule), 
 },
  //lazy loading
  {path : '**', component : PageNotFoundComponent} //always put wildccad @last
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
