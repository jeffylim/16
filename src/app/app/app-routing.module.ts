import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent, WorkersPageComponent } from './shared/pages';
const routes: Routes = [
  {
    path: "",
    component: MainPageComponent
  },
  {
    path: "workers",
    component: WorkersPageComponent,
    pathMatch: "full",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
