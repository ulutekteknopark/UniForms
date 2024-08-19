import { Route } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TemplatesComponent } from './templates/templates.component';

export const appRoutes: Route[] = [
    { path: 'about', component: AboutComponent },
    { path: 'templates', component: TemplatesComponent },
];
