import { Component, OnInit, inject, effect } from '@angular/core';
import { NavigationSection } from './navigation-section/navigation-section';
import { HeroSection } from './hero-section/hero-section';
import { AboutSection } from './about-section/about-section';
import { ExperienceSection } from './experience-section/experience-section';
import { EducationSection } from './education-section/education-section';
import { SkillsSection } from './skills-section/skills-section';
import { ContactSection } from './contact-section/contact-section';
import { getParticlesConfig } from './particles-config';
import { ThemeService } from '../theme.service';


declare let particlesJS: any;

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
    ContactSection,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private themeService = inject(ThemeService);

  constructor() {
    effect(() => {
      const isDarkMode = this.themeService.isDarkMode();
      this.invokeParticles(isDarkMode);
    });
  }

  ngOnInit(): void {
    this.invokeParticles(this.themeService.isDarkMode());
  }

  public invokeParticles(isDarkMode: boolean): void {
    const config = getParticlesConfig(isDarkMode);
    particlesJS('particles-js', config, function () {});
  }
}
