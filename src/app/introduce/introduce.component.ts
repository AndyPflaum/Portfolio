import { Component } from '@angular/core';
import { MenuComponent } from '../header/menu/menu.component';
import { HeaderComponent } from '../header/header.component';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-introduce',
  standalone: true,
  imports: [ HeaderComponent,MenuComponent],
  templateUrl: './introduce.component.html',
  styleUrl: './introduce.component.scss'
})
export class IntroduceComponent {
  constructor(public ls:LanguageService) { }
}
