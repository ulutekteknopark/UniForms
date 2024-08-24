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
    options: {responsive: true,
      maintainAspectRatio: false,
    },
  };

  // chart değişkenini tanımlıyorum
  chart!: Chart;

  ngOnInit(): void {
    // Grafiği oluşturup, chart değişkenine atıyorum
    this.chart = new Chart('MyChart', this.config);
  }
}
