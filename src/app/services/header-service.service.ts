import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderServiceService {

  constructor() { }
  selectedLanguage=new BehaviorSubject("eng")
}
