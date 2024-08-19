import { Route } from '@angular/router';
import { TemplatesComponent } from './templates/templates.component';
import { MainPageComponent } from './main-page/main-page.component';

export const appRoutes: Route[] = [
    { path: '', component: MainPageComponent },
    { path: 'templates', component: TemplatesComponent },
];
