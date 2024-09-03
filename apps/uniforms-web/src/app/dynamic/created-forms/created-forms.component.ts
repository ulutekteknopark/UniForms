import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UfFormPreviewComponent } from '@uniforms/uf-web-components';
import { UfButtonComponent } from '@uniforms/uf-web-components';

@Component({
  selector: 'uf-created-forms',
  standalone: true,
  imports: [CommonModule, UfFormPreviewComponent, UfButtonComponent],
  templateUrl: './created-forms.component.html',
  styleUrl: './created-forms.component.scss',
})
export class CreatedFormsComponent {
  forms = [
    {
      id: 1,
      formTitle: "Form #1",
      responseCount: 10
    },
    {
      id: 2,
      formTitle: "Form #2",
      responseCount: 0
    },
    {
      id: 3,
      formTitle: "Form #3",
      responseCount: 100
    },
  ]

  constructor(private router: Router) {}

  gotoForm(formId: number) {
    let form = this.forms.find(form => form.id == formId)
    alert(`${form?.formTitle} detayları`)
  }

  gotoTemplates(){
    this.router.navigate(["/templates"]);
  }
}
