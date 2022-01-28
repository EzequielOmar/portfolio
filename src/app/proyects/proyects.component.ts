import { Component, OnInit } from '@angular/core';
import { LoadProyectsService } from '../services/load-proyects.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss'],
})
export class ProyectsComponent implements OnInit {
  proyects?: any;

  constructor(private loadProy: LoadProyectsService) {}

  ngOnInit(): void {
    this.loadProy.getProyects().subscribe((data) => {
      this.proyects = Array.from(data);
    });
  }
}
