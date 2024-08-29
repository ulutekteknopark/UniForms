import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'uf-result-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css'],
})
export class ResultPageComponent implements OnInit {
  public config: any = {
    type: 'pie',
    data: {
      labels: ['JAN', 'FEB', 'MAR', 'APRIL'],
      datasets: [
        {
          label: 'Sales',
          data: [467, 576, 572, 588],
          backgroundColor: 'blue',
        },
        {
          label: 'PAT',
          data: [100, 120, 133, 134],
          backgroundColor: 'red',
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  };

  chart!: Chart;

  responses = [
    { question: 'What is your name?', answer: 'John Doe' },
    { question: 'How old are you?', answer: '28' },
    // Diğer yanıtlar
  ];

  selectedStep = 'step1';

  ngOnInit(): void {
    this.showStep(this.selectedStep);
  }

  showStep(step: string) {
    this.selectedStep = step;
    if (step === 'step1') {
      setTimeout(() => {
        this.chart = new Chart('MyChart', this.config);
      }, 0);
    }
  }
}
