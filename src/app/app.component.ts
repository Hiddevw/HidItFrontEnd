import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from './services/client.service';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
clients: any[] = [];
title = 'HidItFrontEnd';

constructor(private clientService: ClientService, private router: Router) {}

  navigateToClients() {
    this.router.navigate(['/clients']);
  }

  ngOnInit(): void {
    this.clientService.getAllClients().subscribe(
      (data) => {
        this.clients = data;
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
