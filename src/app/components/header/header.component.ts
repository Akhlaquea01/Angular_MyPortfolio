import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HeaderServiceService } from 'src/app/services/header-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public languages = [
    {
      name: "English",
      code: "eng"
    },
    {
      name: "Hindi",
      code: "hindi"
    },
    {
      name: "Urdu",
      code: "urdu"
    }
  ]
  public selected = 'eng';
  constructor(public _header: HeaderServiceService,
    public translate: TranslateService) {
    this._header.selectedLanguage.subscribe(res => {
      this.selected = res;
      translate.use(this.selected);
    })

    translate.addLangs(['hindi', 'eng', 'urdu']);
    translate.use(this.selected);

  }

  ngOnInit(): void {
    if (localStorage.getItem("language")) {
      this._header.selectedLanguage.next(localStorage.getItem('language')!);
    }
  }
  public changeLanguae(selectedLanguage: any) {
    localStorage.setItem('language', (selectedLanguage.target as HTMLInputElement).value);
    const lang = (selectedLanguage.target as HTMLInputElement).value;
    this._header.selectedLanguage.next(lang);
  }
}
