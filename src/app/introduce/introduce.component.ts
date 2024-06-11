import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MenuComponent } from '../header/menu/menu.component';

@Component({
  selector: 'app-introduce',
  standalone: true,
  imports: [HeaderComponent,MenuComponent],
  templateUrl: './introduce.component.html',
  styleUrl: './introduce.component.scss'
})
export class IntroduceComponent {

}
