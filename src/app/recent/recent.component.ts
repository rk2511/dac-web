import { Component, OnInit } from '@angular/core';
// import { flipster } from 'jquery.flipster';
declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']
})
export class RecentComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $("#coverflow").flipster();

    jQuery(function(){
      jQuery('#R1').YTPlayer();
    });
  }

}
