import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { ExperianceSectionComponent } from './components/experiance-section/experiance-section.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { MySkillsComponent } from './components/my-skills/my-skills.component';
import { MyWorkSectionComponent } from './components/my-work-section/my-work-section.component';
import { SocialSectionComponent } from './components/social-section/social-section.component';
import { TestimonialsSectionComponent } from './components/testimonials-section/testimonials-section.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { SwiperModule } from "swiper/angular";
import { MyInfoService } from './services/my-info.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeSectionComponent,
    AboutSectionComponent,
    ExperianceSectionComponent,
    MySkillsComponent,
    MyWorkSectionComponent,
    TestimonialsSectionComponent,
    ContactSectionComponent,
    SocialSectionComponent,






  ],
  imports: [BrowserModule, AppRoutingModule, SwiperModule,HttpClientModule ],
  providers: [MyInfoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
