import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  cardArrDetails = [...Array(3)].map((_, i) => ({
    imageSrc: i + 1,
    title:
      "How Did Van Gogh's Turbulent Mind Depict One of the Most Complex Concepts in Physics?",
  }));

  constructor() {}
}
