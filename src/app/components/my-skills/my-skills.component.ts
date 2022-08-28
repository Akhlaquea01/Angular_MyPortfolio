import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {
  skills=[
    "/assets/images/Jquery.png",
    "/assets/images/Css.png",
    "/assets/images/Angular.png",
    "/assets/images/Git.png",
    "/assets/images/Html.png",
    "/assets/images/JS.png",
    "/assets/images/TS.png",
    "/assets/images/visual-studio-code-icon.png",
    "/assets/images/React.png",
    "/assets/images/Scss.png",//
    "/assets/images/NodeJs.png",//
    "/assets/images/MongoDb.png",//
  ]



  constructor() { }

  ngOnInit(): void {


  }

}
