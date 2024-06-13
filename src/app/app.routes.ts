import { Routes } from '@angular/router';
import { ImpressumComponent } from './impressum/impressum.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './header/menu/menu.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'imprint', component: ImpressumComponent },
    { path: 'menü', component: MenuComponent }
];
