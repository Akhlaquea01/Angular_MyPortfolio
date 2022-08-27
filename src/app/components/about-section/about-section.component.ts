import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent implements OnInit {
  public about = `Hello, I am Akhlaque, and I have completed my bachelor’s degree from A.K.T. University in September
  2020. I am an ambitious and hardworking person with a year and a half of experience in Angular, Node and
  Web technologies.
  In addition, I can manage multiple tasks and work under pressure. Recently I completed my Angular
  development, certifying for the Edureka e-learning platform and pursuing a Master's in Computer Science
  with a specialization in
  Software Engineering from Scaler.
  My strengths are hard working, self motivating and dedicated towards my work. Also I'm a Quick
  learner.In my free time, I enjoy going
  out with friends. I also enjoy watching movies, Cycling, Web Surfing.`;
  public skills = [
    {
      name: "HTML",
      docUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    {
      name: "CSS",
      docUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    {
      name: "JavaScript",
      docUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
      name: "TypeScript",
      docUrl: "https://www.typescriptlang.org/docs/handbook/intro.html"
    },
    {
      name: "Angular",
      docUrl: "https://angular.io/docs"
    },
    {
      name: "React",
      docUrl: "https://reactjs.org/docs/getting-started.html"
    },
    {
      name: "NodeJs",
      docUrl: "https://nodejs.org/en/docs/"
    },
    {
      name: "Express",
      docUrl: "https://expressjs.com/en/4x/api.html"
    },
    {
      name: "Python",
      docUrl: "https://docs.python.org/3/"
    },
    {
      name: "Java",
      docUrl: "https://docs.oracle.com/en/java/"
    },
    {
      name: "MongoDb",
      docUrl: "https://mongoosejs.com/docs/api/document.html"
    },
    {
      name: "Git",
      docUrl: "https://git-scm.com/docs/git"
    },
    {
      name: "SCSS",
      docUrl: "https://sass-lang.com/documentation/"
    },
    {
      name: "JSON",
      docUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON"
    },
    {
      name: "JQuery",
      docUrl: "https://api.jquery.com/"
    },
  ];
  constructor() { }

  ngOnInit(): void {



  }

}
