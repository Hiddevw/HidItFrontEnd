// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './components/client/client.component';
import { TrainerComponent } from './components/trainer/trainer.component';

const routes: Routes = [
{ path: 'clients', component: ClientComponent },
{ path: 'trainers', component: TrainerComponent },
// Add other routes as needed
{ path: '', redirectTo: '/home', pathMatch: 'full' }, // Example default route
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// Exporting routes separately (optional)
export const appRoutes = routes;
