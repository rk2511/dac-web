import { Component, OnInit, AfterViewInit, Injectable } from '@angular/core';
import { WebService } from '../web.service';
import { DomSanitizer } from '@angular/platform-browser';
declare var jQuery: any;
declare var $: any;
@Injectable()

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit, AfterViewInit {
  private homeslidebox = [];
  constructor(private dataService: WebService, public sanitizer: DomSanitizer) { }

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

  ngAfterViewInit() {
    jQuery(document).ready(function() {
      $('#homeCarousel').carousel({
             interval: 2000
      });
    });
   }
}
