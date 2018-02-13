import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-flipster',
  templateUrl: './flipster.component.html',
  styleUrls: ['./flipster.component.css']
})
export class FlipsterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('calling flipster');
    var carousel = $("#carousel").flipster({
      style: 'carousel',
      // spacing: -0.5,
       loop: true,
       click: true,
      onItemSwitch: function(currentItem) {
          getCurrentImage(currentItem);
      }
  });
  
  var getCurrentImage = function(currentItem) {
    console.log('the current item is ', currentItem);
    const img = $(currentItem).find('img').attr('src');
    $('#bigimg').attr('src', img);
  };
  }

}
