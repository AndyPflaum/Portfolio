import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  constructor(public ls:LanguageService){}

  names = [
    'Join',
    'El Pollo Loco'
  ]
  languages = [
    'Angular | TypeScript | HTML | CSS | Firebase',
    'JavaScript | HTML | CSS'
  ]
  text = [
    'Aufgabenmanager basierend auf dem Kanban-System. Erstellen und organisieren Sie Aufgaben per Drag-and-Drop, und weisen Sie Benutzern und Kategorien zu.',
    'Spring-, Lauf- und Wurfspiel basierend auf einem objektorientierten Ansatz. Hilf Pepe dabei, Münzen und Tabasco-Salsa zu finden, um gegen das verrückte Huhn zu kämpfen.'
  ]
  englishText =[
    'Task manager based on the Kanban system. Create and organize tasks using drag-and-drop, and assign users and categories.',
    'Spring, run, and throw game based on an object-oriented approach. Help Pepe find coins and Tabasco salsa to fight against the crazy chicken.'
  ]

  images = [
    'assets/img/portfolio/joinPhoto.png',
    'assets/img/portfolio/elPolloLoco.png'
  ]

  githubs=[
    'https://github.com/diimmeeyyyyy/join',
    'https://github.com/AndyPflaum/EL-POLLO-LOCO'
  ]

  pages =[
    'https://andreas-pflaum.com/Join/index.html',
    'https://andreas-pflaum.com/EL-POLLO-LOCO/'
  ]

}

