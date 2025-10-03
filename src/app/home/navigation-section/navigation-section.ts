import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavItem {
  href: string;
  label: string;
}

@Component({
  selector: 'app-navigation-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation-section.html',
  styleUrl: './navigation-section.scss'
})
export class NavigationSection implements OnInit {
  scrolled = false;
  isOpen = false;

  navItems: NavItem[] = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Me' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  ngOnInit() {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }

  toggleMobileMenu() {
    this.isOpen = !this.isOpen;
  }

  closeMobileMenu() {
    this.isOpen = false;
  }
}
