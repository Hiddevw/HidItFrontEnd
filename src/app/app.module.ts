import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ClientComponent } from './components/client/client.component';
import { TrainerComponent } from './components/trainer/trainer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClientService } from './services/client.service'; // Adjust the import based on your actual path
import { TrainerService } from './services/trainer.service'; // Adjust the import based on your actual path


@NgModule({
declarations: [
AppComponent,
HomeComponent,
ClientComponent,
TrainerComponent
],
imports: [
BrowserModule,
AppRoutingModule,
HttpClientModule,
FormsModule
],
providers: [
ClientService,
TrainerService // Add TrainerService to the providers array
],
bootstrap: [AppComponent]
})
export class AppModule { }
