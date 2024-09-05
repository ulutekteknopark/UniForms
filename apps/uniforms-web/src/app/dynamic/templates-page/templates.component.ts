import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import {
  UfTemplatePreviewComponent,
  UfFormInputComponent
} from '@uniforms/uf-web-components';

@Component({
  selector: 'uf-templates',
  standalone: true,
  imports: [CommonModule, UfTemplatePreviewComponent, UfFormInputComponent, MatIcon],
  templateUrl: './templates.component.html',
  styleUrl: './templates.component.scss',
})
export class TemplatesComponent {
  // TODO: create type interfaces
  templates = [ {
      id: 1,
      previewImage: 'https://via.placeholder.com/400x300',
      templateName: 'Boş şablon'
    },
    {
      id: 2,
      previewImage: 'https://via.placeholder.com/400x300',
      templateName: 'iş Başvuru Formu'
    },
    {
      id: 3,
      previewImage: 'https://via.placeholder.com/400x300',
      templateName: 'Restoran değerlendirme formu'
    },
    {
      id: 4,
      previewImage: 'https://via.placeholder.com/400x300',
      templateName: 'Üniversite eğitim değerlendirme formu'
    },
    {
      id: 5,
      previewImage: 'https://via.placeholder.com/400x300',
      templateName: 'Ödeme Formu'
    },
    {
      id: 6,
      previewImage: 'https://via.placeholder.com/400x300',
      templateName: 'Müşteri geri bildirim anketi'
    },
    {
      id: 7,
      previewImage: 'https://via.placeholder.com/400x300',
      templateName: 'Otel Rezevasyon Formu'
    }
  ];

  filteredTemplates = this.templates; // TODO: Create type interfaces

  searchTemplateFormControl = new FormControl('');

  ngOnInit() {
    this.searchTemplateFormControl.valueChanges.subscribe(value => {
      console.log('Search input changed:', value);
      this.filterTemplates(value);
    });
  }

  filterTemplates(searchTerm: string | null) {
    if (searchTerm) {
      this.filteredTemplates = this.templates.filter(template =>
        template.templateName.toLowerCase()
        .replace("İ", "i")
        .includes(searchTerm.toLowerCase().replace("İ", "i"))
      );
    } else {
      this.filteredTemplates = this.templates;
    }
  }

  useTemplate(templateId: Number) {
    let template = this.templates.find(template => template.id == templateId)
    alert(`${template?.templateName} şablonu kullanılacak`)
  }
}
