import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }
  german = true;
  isMobile = false;
  imagePath: string = 'assets/img/english.png';
  isMenuOpen: boolean = false;

  toggleLanguage(){
    this.german = !this.german;
    this.imagePath = this.german ? 'assets/img/english.png' : 'assets/img/germany.png';
  }

  
  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
    
  }
}

