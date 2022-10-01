import { Component, OnInit } from '@angular/core';
import { ModalService } from '../common/modal.service';


@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent implements OnInit {
  public about = `Hi, I'm Akhlaque, a passionate and hardworking web developer with experience in Node.js and Angular. After completing my Angular development training, I became certified for the Edureka e-learning platform and am pursuing a Master's degree in Computer Science with a specialization in Software Engineering from Scaler.
  Work ethic, self-motivation, and dedication are some of my strengths. When I have free time, I enjoy socializing with friends.In addition, I am interested in watching movies, cycling, and surfing the web.`;
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

  bodyText: string = '';
  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.bodyText = 'This text can be updated in modal 1';
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
