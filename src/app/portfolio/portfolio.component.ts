import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  names = [
    'Join',
    'El Pollo Loco'
  ]
  languages = [
    'Angular | TypeScript | HTML | CSS ',
    'JavaScript | HTML | CSS'
  ]
  text = [
    'Aufgabenmanager basierend auf dem Kanban-System. Erstellen und organisieren Sie Aufgaben per Drag-and-Drop, und weisen Sie Benutzern und Kategorien zu.',
    'Spring-, Lauf- und Wurfspiel basierend auf einem objektorientierten Ansatz. Hilf Pepe dabei, Münzen und Tabasco-Salsa zu finden, um gegen das verrückte Huhn zu kämpfen.'
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
    'https://andreas-pflaum.developerakademie.net/join2/contacts.html',
    'https://andreas-pflaum.developerakademie.net/EL-POLLO-LOCO/'
  ]

}

