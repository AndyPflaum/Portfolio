import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  constructor(public ls:LanguageService){}
  images =[
    'assets/img/skills/Angular.png',
    'assets/img/skills/JavScript.png',
    'assets/img/skills/Firebase.png',
    'assets/img/skills/Scrum.png',
    'assets/img/skills/Git.png',
    'assets/img/skills/HTML.png',
    'assets/img/skills/CSS.png',
    'assets/img/skills/Typescript.png',
    'assets/img/skills/API.png',
    'assets/img/skills/Design.png',
  ]

  imagesName = [
    'Angular',
    'JavaScript',
    'Firabase',
    'Scrum',
    'GIT',
    'HTML',
    'CSS',
    'TypeScript',
    'Rest-Api',
    'Material Design'
  ]

}
