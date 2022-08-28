import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work-section',
  templateUrl: './my-work-section.component.html',
  styleUrls: ['./my-work-section.component.scss']
})
export class MyWorkSectionComponent implements OnInit {
  projects=[
    {
      imagePath:"assets/images/Time.png",
      name:"Time Fetching",
      description:"Website which shows current time and date of different locations.Created as project for Jquery.",
      url:"https://github.com/Akhlaquea01/TimeSync"
    },
    {
      imagePath:"assets/images/ToDo's.PNG",
      name:"Todo List",
      description:"Website which add tasks in list and delete.Crested as project for JavaScript.",
      url:"https://github.com/Akhlaquea01/ToDo-s-List"
    },
    {
      imagePath:"assets/images/My Portfolio.png",
      name:"My Portfolio",
      description:"Website created to show my skills as well as to serve the purose of resume.",
      url:"http://iam-atts.herokuapp.com/"
    },
    {
      imagePath:"assets/images/Weather-app.png",
      name:"Weather App",
      description:"Website which fetch weather of given location .Crested as project for Node.",
      url:"https://iamatts-weather.herokuapp.com/"
    },
    {
      imagePath:"assets/images/Chat-app.png",
      name:"Chat App",
      description:"Website allow to chat in room.Created as project for Node.",
      url:"http://chat-atts.herokuapp.com/"
    },
    {
      imagePath:"assets/images/BookDB.png",
      name:"BookStore db",
      description:"Python BookStore database .Crested as project for Python.",
      url:"https://github.com/Akhlaquea01/Book-Store"
    },
    {
      imagePath:"assets/images/Zonal.png",
      name:"Zonal Fest",
      description:"Official website for my university college fest hosted by my collge.",
      url:"https://akhlaquea01.github.io/Zonal-Fest/"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }
  openProject(work:any){
    window.open(work.url,"_blank")
  }
}
