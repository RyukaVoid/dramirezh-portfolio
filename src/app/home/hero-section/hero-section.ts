import { Component } from '@angular/core';
import {
  LucideAngularModule,
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  Download,
} from 'lucide-angular';

@Component({
  selector: 'app-hero-section',
  imports: [LucideAngularModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {
  readonly Github = Github;
  readonly Linkedin = Linkedin;
  readonly Mail = Mail;
  readonly ArrowDown = ArrowDown;
  readonly Download = Download;
}
