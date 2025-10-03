import { Component } from '@angular/core';
import { NavigationSection } from './navigation-section/navigation-section';
import { HeroSection } from './hero-section/hero-section';
import { AboutSection } from './about-section/about-section';
import { ExperienceSection } from './experience-section/experience-section';
import { EducationSection } from './education-section/education-section';
import { SkillsSection } from './skills-section/skills-section';
import { ContactSection } from './contact-section/contact-section';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavigationSection,
    HeroSection,
    AboutSection,
    ExperienceSection,
    EducationSection,
    SkillsSection,
    ContactSection
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
