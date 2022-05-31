import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface CardData {
  imgSrc: string;
  heading: string;
  title: string;
  content: string;
  author: string;
  publishDate: string;
  likes: number;
  comment: number;
  views: number;
}

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private _cardDataUrl = 'assets/models/cardData.json';

  constructor(private httpClient: HttpClient) {}

  // For getting card data from backend
  getCardData() {
    return this.httpClient.get<CardData[]>(this._cardDataUrl);
  }
}
