import { Component } from '@angular/core';
import {
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  FileText,
  LucideAngularModule,
  Download
} from 'lucide-angular';

@Component({
  selector: 'app-contact-section',
  imports: [LucideAngularModule],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss',
})
export class ContactSection {
  readonly MapPin = MapPin;
  readonly Mail = Mail;
  readonly Phone = Phone;
  readonly Github = Github;
  readonly Linkedin = Linkedin;
  readonly FileText = FileText;
  readonly Download = Download;
}
