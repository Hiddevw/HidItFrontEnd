// trainer.component.ts

import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../../services/trainer.service'; // Adjust the import path

@Component({
selector: 'app-trainer',
templateUrl: './trainer.component.html',
styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {
trainers: any[] = [];

constructor(private trainerService: TrainerService) { }

  ngOnInit(): void {
    this.trainerService.getAllTrainers().subscribe(data => {
      this.trainers = data;
    });
  }
}
