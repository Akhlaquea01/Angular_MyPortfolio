import { Component, OnInit } from '@angular/core';
import { Autoplay, SwiperOptions } from 'swiper';
import { HostListener } from "@angular/core";
import { fromEvent, Observable, Subscription } from "rxjs";


import SwiperCore, { EffectCoverflow, Pagination, } from "swiper";


// install Swiper modules


import Swiper from 'swiper';
import { event } from 'jquery';

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
  screenHeight: number = 0;
  screenWidth: number = 0;
  count = 3  
  resizeObservable$: Observable<Event> | undefined
  resizeSubscription$: Subscription | undefined

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
  responsiveScreens(){
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 360) {
      this.count = 1
    }
    else if (this.screenWidth <= 540) {
      this.count = 2
    }
    else{
      this.count = 3;
    }
  }
}
