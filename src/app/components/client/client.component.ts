import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';



@Component({
selector: 'app-client',
templateUrl: './client.component.html',
styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
clients: any[] = [];

constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    // Initialization logic here
  }
}

