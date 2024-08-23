import { Component, OnInit, Input } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { MatError } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'uf-form-rate-input',
  standalone: true,
  imports: [MatIcon, MatError, NgIf, NgFor],
  templateUrl: './uf-form-rate-input.component.html',
  styleUrls: ['./uf-form-rate-input.component.scss'],
})

export class UfFormRateInputComponent implements OnInit {
  @Input() word1: string = "undefined";
  @Input() word2: string = "undefined";
  @Input() color: string = "text-purple-700";

  @Input() rating: number = 1;
  @Input() starCount: number = 5;

  ratingArr: number[] = [];

  ngOnInit() {
    this.ratingArr = Array.from({ length: this.starCount }, (_, index) => index);
  }

  click(rating: number) {
    this.rating = rating;
  }

  showIcon(index: number) {
    return this.rating >= index + 1 ? 'star' : 'star_border';
  }
}
