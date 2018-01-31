import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  servicetitle: string;
  serviceimage: string;

  constructor() { }

  ngOnInit() {
  }


  onServiceItemClick(service: string) {

    if (service === 'photo') {
      this.servicetitle = 'Photography';
      this.serviceimage = 'assets/s4.jpg';
    }

    if (service === 'video') {
      this.servicetitle = 'Video';
      this.serviceimage = 'assets/s1.jpg';
    }
  }
}
