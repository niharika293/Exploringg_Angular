import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeadsComponent } from './leads/leads.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path : '', redirectTo : 'leads', pathMatch : 'full'},
  {path : 'leads', component : LeadsComponent},
  {path : 'search', component : SearchComponent},
  {path : '**', component : PageNotFoundComponent} //always put wildccad @last
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
