import { Component, OnInit, AfterViewInit, AfterViewChecked, AfterContentChecked, Injectable, DoCheck, OnChanges  } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { WebService } from '../web.service';

declare var jQuery: any;
declare var $: any;

@Injectable()

@Component({
  selector: 'app-galimage',
  templateUrl: './galimage.component.html',
  styleUrls: ['./galimage.component.css']
})

export class GalimageComponent implements OnInit, OnChanges, AfterViewInit, AfterViewChecked, AfterContentChecked, DoCheck {
  type: {name: string};
  flag = false;
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
         }).then(() => {
            console.log('lets see when this returns', this.imagebox);
             this.loadFlipster();
          // setTimeout(() => {
          //  this.loadFlipster();
          // }, 2000);
         });
      }
    );

  }

  loadFlipster() {
              setTimeout(() => {
          //  this.loadFlipster();
    console.log('calling flipster');
    let carousel = $('#carousel').flipster({
      style: 'carousel',
      spacing: -0.5,
       loop: true,
      click: true,
      scrollwheel: false,
     onItemSwitch: function(currentItem) {
          getCurrentImage(currentItem);
      }
  });

 let getCurrentImage = function(currentItem) {
   console.log('the current item is ', currentItem);
   const img = $(currentItem).find('img').attr('src');
   $('#bigimg').attr('src', img);
 };

 carousel.flipster('index');
      }, 100);

  }


  ngAfterViewInit() {

   // this.loadFlipster();

   }

   ngAfterViewChecked() {
    // this.loadFlipster();
   }

   ngAfterContentChecked() {
    // this.loadFlipster();
   }

   ngDoCheck() {
     // this.loadFlipster();
   }

   ngOnChanges() {
    // this.loadFlipster();
   }
}


