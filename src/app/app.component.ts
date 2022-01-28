import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ezequielomar';
  language: string = 'en';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang(this.language);
  }

  setLanguage(lang: string): void {
    this.language = lang;
    this.translate.use(lang);
  }
}
