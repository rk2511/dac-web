import { Component, OnInit, Injectable } from '@angular/core';
import { WebService } from '../web.service';

@Injectable()

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  private homeslidebox = [];
  constructor(private dataService: WebService) { }

  ngOnInit() {

    this.dataService.getHomeSlide().then((data: any) => {
      console.log( 'The homeslide data is', data);
    data.map(item => {
      return {
        title: item.title,
        imglink: item.imglink
      }
    }).forEach(item => this.homeslidebox.push(item));
     });
  }

}
