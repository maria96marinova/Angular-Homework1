import { Component,OnInit} from '@angular/core';
import { HeartDataService } from './heart-data.service';
import { Heart } from './heart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[HeartDataService],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'Vote for the Programming Languages';
  hearts:Array<Heart>;

  constructor(private heartDataService:HeartDataService){}

  ngOnInit(): void {
    this.hearts=this.heartDataService.getData();
  }



}
