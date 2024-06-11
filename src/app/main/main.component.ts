import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { IntroduceComponent } from '../introduce/introduce.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { MySkillsComponent } from '../my-skills/my-skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent,IntroduceComponent,AboutMeComponent,MySkillsComponent,PortfolioComponent,ContactComponent,FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
