import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input() count:number;
  @Input() image:string;
  @Input() active:boolean;
  @Input() colored:string;

  constructor() { }

  vote(){

    if(this.colored=='grey'){
    this.count++;
    this.colored='pink';
    }

    else if(this.colored=='pink'){
      this.count--;
      this.colored='grey';
    }
    
  }

 

  ngOnInit() {
  }

}
