import { Component, OnInit } from '@angular/core';
import { CardData, DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  cardArrDetails!: CardData[];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    // For setting cardArrDetails with card data from backend
    this.dashboardService.getCardData().subscribe((data) => {
      this.cardArrDetails = data;
    });
  }
}
