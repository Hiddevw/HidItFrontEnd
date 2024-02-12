import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ClientComponent } from './components/client/client.component';
import { TrainerComponent } from './components/trainer/trainer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClientService } from './services/client.service';
import { TrainerService } from './services/trainer.service';
import { RouterModule } from '@angular/router';

@NgModule({
declarations: [
HomeComponent,
ClientComponent,
TrainerComponent
],
imports: [
BrowserModule,
AppRoutingModule,
HttpClientModule,
FormsModule,
],
providers: [
ClientService,
TrainerService
],
bootstrap: [AppComponent]
})
export class AppModule { }
