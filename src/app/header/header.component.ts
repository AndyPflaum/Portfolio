import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuVisible = true;

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
    console.log(this.isMenuVisible); // Debugging
  }
}
