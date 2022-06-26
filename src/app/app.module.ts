import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { MySkillsComponent } from './components/my-skills/my-skills.component';
import { TestimonialsSectionComponent } from './components/testimonials-section/testimonials-section.component';
import { MyWorkSectionComponent } from './components/my-work-section/my-work-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { SocialSectionComponent } from './components/social-section/social-section.component';
import { HomeSectionComponent } from './components/home-section/home-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutSectionComponent,
    ServicesSectionComponent,
    MySkillsComponent,
    TestimonialsSectionComponent,
    MyWorkSectionComponent,
    ContactSectionComponent,
    SocialSectionComponent,
    HomeSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
