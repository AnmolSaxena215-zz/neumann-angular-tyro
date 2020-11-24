import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../../services/trending.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  public trending = []; 
  
  constructor(private trendingService : TrendingService) { }

  ngOnInit(): void {
    this.trendingService.getTrending()
    .subscribe(data =>{
      this.trending = data;
    }
    );
  }
}
