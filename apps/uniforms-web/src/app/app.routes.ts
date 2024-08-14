import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AboutComponent } from './about/about.component';

export const appRoutes: Route[] = [
    { path: 'nx', component: NxWelcomeComponent },
    { path: 'about', component: AboutComponent },
];
