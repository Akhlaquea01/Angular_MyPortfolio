import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss']
})
export class HomeSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var options = {
      strings: ['','SOFTWARE DEVELOPER', 'ANGULAR DEVELOPER'],
      typeSpeed: 120,
      backSpeed: 100,
      loop: true,
    };
    
    var typed = new Typed('.typed', options);
    typed.reset(true)

    
  }

}
