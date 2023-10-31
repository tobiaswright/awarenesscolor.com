import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorPageComponent } from './color-page/color-page.component';
import { ColorListComponent } from './color-list/color-list.component';

const routes: Routes = [
  { path: '', component: ColorListComponent },
  { path: ':name', component: ColorPageComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
