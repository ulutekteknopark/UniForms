import { Route } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TemplatesComponent } from './templates/templates.component';
import { MainPageComponent } from './main-page/main-page.component';

export const appRoutes: Route[] = [
    { path: '', component: MainPageComponent },
    { path: 'about', component: AboutComponent },
    { path: 'templates', component: TemplatesComponent },
];
