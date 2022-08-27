import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent implements OnInit {
  public skills = [
    {
      name: "HTML",
      docUrl: ""
    },
    {
      name: "CSS",
      docUrl: ""
    },
    {
      name: "JavaScript",
      docUrl: ""
    },
    {
      name: "TypeScript",
      docUrl: ""
    },
    {
      name: "Angular",
      docUrl: ""
    },
    {
      name: "React",
      docUrl: ""
    },
    {
      name: "NodeJs",
      docUrl: ""
    },
    {
      name: "Express",
      docUrl: ""
    },
    {
      name: "Python",
      docUrl: ""
    },
    {
      name: "Java",
      docUrl: ""
    },
    {
      name: "MongoDb",
      docUrl: ""
    },
    {
      name: "Git",
      docUrl: ""
    },
    {
      name: "SCSS",
      docUrl: ""
    },
    {
      name: "JSON",
      docUrl: ""
    },
    {
      name: "JQuery",
      docUrl: ""
    },
  ];
  constructor() { }

  ngOnInit(): void {



  }

}
