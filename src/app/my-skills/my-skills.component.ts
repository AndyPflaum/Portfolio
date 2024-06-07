import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  images =[
    'assets/img/skills/Icon + Name.png',
    'assets/img/skills/Frame 6.png',
    'assets/img/skills/Frame 7.png',
    'assets/img/skills/Frame 8.png',
    'assets/img/skills/Frame 9.png',
    'assets/img/skills/Frame 10.png',
    'assets/img/skills/Frame 11.png',
    'assets/img/skills/Frame 12.png',
    'assets/img/skills/Frame 13.png',
    'assets/img/skills/Frame 18.png',
  ]

}
