import { Component, OnInit, AfterViewInit } from '@angular/core';
// import jQuery from 'jquery';
// import * from 'jquery';
declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-galimage',
  templateUrl: './galimage.component.html',
  styleUrls: ['./galimage.component.css']
})
export class GalimageComponent implements OnInit, AfterViewInit {


  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    jQuery(document).ready(function() {

      $('#myCarousel').carousel({
             interval: 2000
      });
      // Handles the carousel thumbnails
      $('[id^=carousel-selector-]').click(function () {
      const id_selector = $(this).attr('id');
      try {
         const id = /-(\d+)$/.exec(id_selector)[1];
         console.log(id_selector, id);
         jQuery('#myCarousel').carousel(parseInt(id));
         console.log('cominghere', id);
      } catch (e) {
         console.log('Regex failed!', e);
      }
      });
      // When the carousel slides, auto update the text
      $('#myCarousel').on('slid.bs.carousel', function (e) {
              const id = $('.item.active').data('slide-number');
             $('#carousel-text').html($('#slide-content-' + id).html());
      });
      });
  }

}
