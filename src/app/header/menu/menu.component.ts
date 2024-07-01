import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { RouterLink, RouterModule } from '@angular/router';
import { LanguageService } from '../../language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ FooterComponent, RouterModule, RouterLink, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
constructor(public ls:LanguageService){}

closeMenu(){
  this.ls.isMenuOpen = false;
}
}
