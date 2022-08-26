import { Component, OnInit } from '@angular/core';
import {  Autoplay, SwiperOptions } from 'swiper';


import SwiperCore, { EffectCoverflow, Pagination,  } from "swiper";


// install Swiper modules


import Swiper from 'swiper';

SwiperCore.use([  
  Pagination,
  Autoplay,
  EffectCoverflow,

  


  
  
  
]);

@Component({
  selector: 'app-testimonials-section',
  templateUrl: './testimonials-section.component.html',
  styleUrls: ['./testimonials-section.component.scss']
})
export class TestimonialsSectionComponent implements OnInit {
 
  
  

  constructor() { }

  ngOnInit(): void {


    
  

    

 

    // var swiper = new Swiper(".slide-content", {
    //   slidesPerView: 2,
    //   spaceBetween: 25,
    //   loop: true,
    //   centeredSlides: true,
    //   // fadeEffect: true,
    //   grabCursor: true,
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //     dynamicBullets: true,
    //   },
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
  
    //   breakpoints:{
    //       0: {
    //           slidesPerView: 1,
    //       },
    //       520: {
    //           slidesPerView: 2,
    //       },
    //       950: {
    //           slidesPerView: 3,
    //       },
    //   },
    // });
  }

}
