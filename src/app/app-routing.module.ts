// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClientComponent } from './components/client/client.component';
import { TrainerComponent } from './components/trainer/trainer.component';

const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'clients', component: ClientComponent },
{ path: 'trainers', component: TrainerComponent },
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
