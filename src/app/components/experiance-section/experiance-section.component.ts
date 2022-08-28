import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiance-section',
  templateUrl: './experiance-section.component.html',
  styleUrls: ['./experiance-section.component.scss']
})
export class ExperianceSectionComponent implements OnInit {
public experience=[
  {
    CompanyName:"Zycus Infotech",
    designation:"Software Engineer",
    joiningDate:new Date('September 14, 1999 12:00:00'),
    leavingDate:"Present",
    responsibilities:[
      "Detected vulnerabilities and code smells in code using the automatic code review tool SonarQube.",
      "Created and integrated RESTful API Using the Swagger tool.",
      "Designed, built, and maintained efficient, reusable , and reliable code to meet business process and application requirements.",
      "Reviewed code and assessed the impact of submitted changes",
      "Triggering and deploying build Using Goc'd",
    ],
    isPresentCompany:true
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}