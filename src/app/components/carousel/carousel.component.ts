import { Component, OnInit, Input } from '@angular/core';
import { CarouselService } from 'src/app/services/carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() container: string;
  
  urls: string[] = [];
  constructor(private carouselService: CarouselService) { }

  ngOnInit() {
	  if (this.container !== undefined) {
		  this.carouselService.get(this.container).subscribe(
			  (urls: string[]) => this.urls = urls
		  );
	  }
  }

}
