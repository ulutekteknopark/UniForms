import { Route } from '@angular/router';
import { TemplatesComponent } from './templates/templates.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CreatedFormsComponent } from './created-forms/created-forms.component';

export const appRoutes: Route[] = [
    { path: '', component: MainPageComponent },
     { path: 'templates', component: TemplatesComponent },
     { path: 'forms', component: CreatedFormsComponent },
];
