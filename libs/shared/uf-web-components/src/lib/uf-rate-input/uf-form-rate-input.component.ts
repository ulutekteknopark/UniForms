import { Component, OnInit, Input } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { MatError } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';

// export interface FormRateInputArgs {
//   color: string,
//   starCount: number,
//   word_right: string,
//   word_left: string,
// }

@Component({
  selector: 'uf-form-rate-input',
  standalone: true,
  imports: [MatIcon, MatError, NgIf, NgFor],
  templateUrl: './uf-form-rate-input.component.html',
  styleUrls: ['./uf-form-rate-input.component.scss'],
})

export class UfFormRateInputComponent {
  @Input() choices?: { [key: string]: any };
  @Input() rating: number = 1;

  get ratingArr() : number[] {
    return Array.from({ length: this.starCount() }, (_, index) => index);
  }

  click(rating: number) {
    this.rating = rating;
  }

  showIcon(index: number) {
    return this.rating >= index + 1 ? 'star' : 'star_border';
  }

  wordRight(): string {
    return this.choices?.['word_right'] ?? '';
  }

  wordLeft(): string {
    return this.choices?.['word_left'] ?? '';
  }

  starCount(): number {
    return this.choices?.['starCount'] ?? 5;
  }

  getColor(): string {
    return this.choices?.['color'] ?? "text-purple-700";
  }
}
