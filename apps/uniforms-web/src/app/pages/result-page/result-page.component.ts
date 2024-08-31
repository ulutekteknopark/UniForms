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
      labels: [],
      datasets: [
        {
          label: 'Responses',
          data: [],
          backgroundColor: ['blue', 'red', 'green', 'yellow'],
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
    {
      question: 'What is your name?',
      answers: ['John Doe', 'Jane Smith'],
      type: 'text'
    },
    {
      question: 'How old are you?',
      answers: ['28', '30', '25'],
      type: 'text'
    },
    {
      question: 'What is your favorite color?',
      answers: ['Blue', 'Red', 'Green'],
      type: 'radio'
    },
    {
      question: 'Do you like pizza?',
      answers: ['Yes', 'No'],
      type: 'check'
    },
  ];

  selectedStep = 'step1';
  selectedQuestionIndex?: number;
  selectedAnswers: string[] = [];

  ngOnInit(): void {
    this.showStep(this.selectedStep);
  }

  showStep(step: string, selectedQuestionIndex?: number) {
    this.selectedStep = step;

    if (step === 'step1') {
      const hasChart = this.responses.some(response => response.type === 'radio' || response.type === 'check');
      
      if (hasChart) {
        const chartData = this.responses.filter(response => response.type === 'radio' || response.type === 'check');
        this.config.data.labels = chartData.map(response => response.question); 
        this.config.data.datasets[0].data = chartData.map(response => response.answers.length); 

        setTimeout(() => {
          this.chart = new Chart('MyChart', this.config);
        }, 0);
      } else {
        if (this.chart) {
          this.chart.destroy();
        }
      }
    } else if (step === 'step2') {
      this.selectedQuestionIndex = selectedQuestionIndex;
    } else if (step === 'step3') {
      if (selectedQuestionIndex !== undefined) {
        this.selectedAnswers = this.responses[selectedQuestionIndex].answers;
      }
    }
  }
}
