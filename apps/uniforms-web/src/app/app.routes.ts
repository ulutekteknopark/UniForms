import { Route } from '@angular/router';
import { TemplatesComponent } from './templates/templates.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CreatedFormsComponent } from './created-forms/created-forms.component';
import { FormEditorComponent } from './form-editor/form-editor.component';
import { ResultPageComponent } from './pages/result-page/result-page.component';

export const appRoutes: Route[] = [
    { path: '', component: MainPageComponent },
    { path: 'templates', component: TemplatesComponent },
    { path: 'myforms', component: CreatedFormsComponent },
    { path: 'myforms/:formId', component: FormEditorComponent},
    { path: 'myresult', component: ResultPageComponent},
];
