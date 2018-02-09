import { Injectable } from '@angular/core';

@Injectable()
export class HeartDataService {

  constructor() { }

  getData(){
    return [{image:'assets/python.png',count:12,colored:'pink'},
            {image:'assets/java.png',count:42,colored:'grey'},
            {image:'assets/csharp.png',count:36,colored:'grey'}];
  

    }
}
