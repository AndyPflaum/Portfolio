import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})


export class HeaderComponent {
constructor(public ls: LanguageService){}
  
}
