import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }
  german = true;
  imagePath: string = 'assets/img/germany.png';

  toggleLanguage(){
    this.german = !this.german;
    this.imagePath = this.german ? 'assets/img/germany.png' : 'assets/img/english.png';
  }
}
