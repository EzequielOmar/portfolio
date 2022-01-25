import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  @Output() lenguageSelected: EventEmitter<string> = new EventEmitter();
  //handle responsive menu
  open: boolean = false;

  constructor() {}

  changeLenguage(leng: string) {
    this.lenguageSelected.emit(leng);
  }
}
