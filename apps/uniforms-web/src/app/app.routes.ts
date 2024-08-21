import { Route } from '@angular/router';
import { TemplatesComponent } from './pages/templates/templates.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

export const appRoutes: Route[] = [
    { path: '', component: MainPageComponent },
    { path: 'templates', component: TemplatesComponent },
];
