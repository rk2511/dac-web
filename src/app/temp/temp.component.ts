import { Component, OnInit } from '@angular/core';
import { WebService } from '../web.service';
@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {

  messages = [];

  constructor(private webService: WebService) { }

  async ngOnInit() {

    const response = await this.webService.getMessages();
    console.log(response.json());
    this.messages = response.json();
  }
  
}
