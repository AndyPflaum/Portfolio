import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './header/menu/menu.component';
import * as AOS from 'aos';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, IntroduceComponent, AppComponent, AboutMeComponent, MySkillsComponent,
    PortfolioComponent, ContactComponent, FooterComponent, ImpressumComponent, MainComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  async ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const AOS = (await import('aos')).default; // Dynamisches Importieren von 'aos'
      AOS.init({
        duration: 1200,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
      });
    }
  }
}
