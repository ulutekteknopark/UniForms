import { Route } from '@angular/router';
import { MainPageComponent } from './static/main-page/main-page.component';
import { TemplatesComponent } from './dynamic/templates-page/templates.component';
import { CreatedFormsComponent } from './dynamic/created-forms/created-forms.component';
import { FormEditorComponent } from './dynamic/form-editor/form-editor.component';

export const appRoutes: Route[] = [
    { path: '', component: MainPageComponent },
    { path: 'templates', component: TemplatesComponent },
    { path: 'myforms', component: CreatedFormsComponent },
    { path: 'myforms/:formId', component: FormEditorComponent},
];
