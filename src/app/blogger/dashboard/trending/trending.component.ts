import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrendingService } from '../../services/trending.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  public trending = [];

  constructor(
    private route: Router,
    private trendingService: TrendingService) { }

  ngOnInit(): void {
    this.trendingService.getTrending()
      .subscribe(data => {
        this.trending = data;
      }
      );
  }

  goTo(id) {
    this.route.navigate(['read-post/' + id])
  }
}
