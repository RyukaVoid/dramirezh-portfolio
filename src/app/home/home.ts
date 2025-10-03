import { Component } from '@angular/core';
import { NavigationSection } from './navigation-section/navigation-section';
import { HeroSection } from './hero-section/hero-section';
import { AboutSection } from './about-section/about-section';
import { ExperienceSection } from './experience-section/experience-section';
import { EducationSection } from './education-section/education-section';
import { CertificationsSection } from './certifications-section/certifications-section';
import { SkillsSection } from './skills-section/skills-section';
import { ProjectsSection } from './projects-section/projects-section';
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
    CertificationsSection,
    SkillsSection,
    ProjectsSection,
    ContactSection
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
