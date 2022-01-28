import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  @Output() languageSelected: EventEmitter<string> = new EventEmitter();
  @Input() lang?: string;

  constructor() {}

  changeLanguage(lang: string) {
    this.languageSelected.emit(lang);
  }
}
