import { Component, OnInit } from '@angular/core';
import { MyInfoService } from 'src/app/services/my-info.service';
import Typed from 'typed.js';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss']
})
export class HomeSectionComponent implements OnInit {
  public myData: any;
  constructor(private _myInfoService: MyInfoService) { }

  ngOnInit(): void {
    var options = {
      strings: ['', 'SOFTWARE ENGINEER', 'ANGULAR DEVELOPER', 'FRONTEND DEVELOPER', 'FULLSTACK DEVELOPER'],
      typeSpeed: 120,
      backSpeed: 100,
      loop: true,
    };

    var typed = new Typed('.typed', options);
    typed.reset(true)

    this._myInfoService.getUserDetails().subscribe(res=>{
      this.myData = res;
    });

  }
  public resumeDownload(){
    window.open("https://drive.google.com/uc?id=1kLHFabZvOGt73KiFdBZGc5NolMugLaqN&export=download","_blank")
  }
}
