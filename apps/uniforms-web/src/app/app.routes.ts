import { Route } from '@angular/router';
import { TemplatesComponent } from './templates/templates.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CreatedFormsComponent } from './created-forms/created-forms.component';
import { FormEditorComponent } from './form-editor/form-editor.component';

export const appRoutes: Route[] = [
    { path: '', component: MainPageComponent },
    { path: 'templates', component: TemplatesComponent },
    { path: 'myforms', component: CreatedFormsComponent },
    { path: 'myforms/:formId', component: FormEditorComponent},
];
