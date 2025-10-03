import { Component, OnInit, HostListener, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../theme.service';
import {
  Sun,
  Moon,
  Menu,
  X,
  LucideAngularModule
} from 'lucide-angular';

interface NavItem {
  href: string;
  label: string;
}

@Component({
  selector: 'app-navigation-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './navigation-section.html',
  styleUrl: './navigation-section.scss'
})
export class NavigationSection implements OnInit {
  // icons
  readonly sunIcon = Sun;
  readonly moonIcon = Moon;
  readonly menuIcon = Menu;
  readonly xIcon = X;

  private themeService = inject(ThemeService);

  scrolled = false;
  isOpen = false;

  isDarkMode = computed(() => this.themeService.isDarkMode());

  navItems: NavItem[] = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Me' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#skills', label: 'Skills' },
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

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
