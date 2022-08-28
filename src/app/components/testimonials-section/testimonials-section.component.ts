import { Component, OnInit } from '@angular/core';
import { Autoplay } from 'swiper';
import { fromEvent, Observable, Subscription } from "rxjs";
import SwiperCore, { EffectCoverflow, Pagination, } from "swiper";

SwiperCore.use([
  Pagination,
  Autoplay,
  EffectCoverflow,

]);


@Component({
  selector: 'app-testimonials-section',
  templateUrl: './testimonials-section.component.html',
  styleUrls: ['./testimonials-section.component.scss'],
})
export class TestimonialsSectionComponent implements OnInit {
  screenWidth: number = 0;
  count = 3
  resizeObservable$: Observable<Event> | undefined
  resizeSubscription$: Subscription | undefined
  testimonials=[
    {
      name:"Aman Abdullah",
      imagePath:"assets/images/Aman.jpg",
      relation:"Friend",
      message:"You're very responsible and courageous. Seen you from beginning when you make up your mind about something, nothing stands in your way"
    },
    {
      name:"Akanksha",
      imagePath:"assets/images/Choti.jpg",
      relation:"Schoolmate",
      message:"Your ability to recall random facts at just right time is very impressive. You are working really hard will soon reach your goals."
    },
    {
      name:"Ashab Alam",
      imagePath:"assets/images/Ashab.png",
      relation:"Senior",
      message:"You're enthauthist very punctual and hard working. You're always learning new things and try to better yourself, which is awesome."
    },
  ]
  constructor() {

  }
  ngOnInit(): void {
    this.responsiveScreens();
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe(evt => {
      this.responsiveScreens();
      console.log('event: ', evt)
    })
  }
  responsiveScreens() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 540) {
      this.count = 1;
    }
    else {
      this.count = 3;
    }
  }
}
