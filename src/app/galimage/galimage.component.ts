import { Component, OnInit, AfterViewInit, AfterViewChecked, AfterContentChecked, Injectable, DoCheck  } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { WebService } from '../web.service';
// import jQuery from 'jquery';
// import * from 'jquery';
declare var jQuery: any;
declare var $: any;

@Injectable()

@Component({
  selector: 'app-galimage',
  templateUrl: './galimage.component.html',
  styleUrls: ['./galimage.component.css']
})
export class GalimageComponent implements OnInit, AfterViewInit, AfterViewChecked, DoCheck {
  type: {name: string};
  paramsSubscription: Subscription;
  imagebox = [];
  private imagebox1 = [
    // {
    //   id: 0,
    //   link: 'https://hdwallsource.com/img/2014/7/arsenal-wallpaper-7142-7405-hd-wallpapers.jpg'
    // },
    // {
    //   id: 1,
    //   link: 'http://epicwallpaperz.com/wallpaper-hd/arsenal-wallpaper-background-On-wallpaper-hd.jpg'
    // },
    // {
    //   id: 2,
    //   link: 'https://dexab.com/wp-content/uploads/2016/08/Arsenal-HD-Wallpaper-7432.jpg'
    // },
    // {
    //   id: 3,
    //   link: 'https://wallpapercave.com/wp/OqT3dTT.jpg'
    // },
    // {
    //   id: 4,
    //   link: 'https://wallpapercave.com/wp/OqT3dTT.jpg'
    // },
    // {
    //   id: 5,
    //   link: 'https://wallpapercave.com/wp/OqT3dTT.jpg'
    // }
  ];
  constructor(private route: ActivatedRoute, private dataService: WebService) { }

  ngOnInit() {

    this.type = {
      name: this.route.snapshot.params['name']
    };

    this.paramsSubscription = this.route.params
    .subscribe(
      (params: Params) => {
        this.type.name = params['name'];
        this.dataService.getGallery(this.type.name).then((data: any) => {
          this.imagebox.length = 0;
          console.log( 'The gal data is', data);
        data.map(item => {
          return {
            type: item.type,
            imglink: item.imglink
          }
        }).forEach(item => this.imagebox.push(item));
         });

      }
    );

  }

  ngAfterViewInit() {
    jQuery(document).ready(function() {
  console.log('coming inside this part');
      $('#myCarousel').carousel({
             interval: 1000
      });
      // Handles the carousel thumbnails
      // $('[id^=carousel-selector-]').click(function () {
      //   console.log('selecting carousel');
      // const id_selector = $(this).attr('id');
      // try {
      //    const id = /-(\d+)$/.exec(id_selector)[1];
      //    console.log(id_selector, id);
      //    jQuery('#myCarousel').carousel(parseInt(id));
      //    console.log('cominghere', id);
      // } catch (e) {
      //    console.log('Regex failed!', e);
      // }
      // });
      // // When the carousel slides, auto update the text
      // $('#myCarousel').on('slid.bs.carousel', function (e) {
      //         const id = $('.item.active').data('slide-number');
      //        $('#carousel-text').html($('#slide-content-' + id).html());
      // });

    });
   }


   ngAfterViewChecked() {

   }


   ngDoCheck() {

   }

   onSelectImage(id) {
     console.log('Its coming heree', id);
    jQuery('#myCarousel').carousel(parseInt(id));

    $('#myCarousel').on('slid.bs.carousel', function (e) {
      const id1 = $('.item.active').data('slide-number');
     $('#carousel-text').html($('#slide-content-' + id1).html());
    });
   }


  }
