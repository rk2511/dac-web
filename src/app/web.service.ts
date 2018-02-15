import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()

export class WebService {
galdata: any;

    constructor(private http: HttpClient) {}

    getGallery(type) {
        // this.http.get('/gallery/' + type).subscribe(data => {
        //     this.galdata = data;
        //     console.log('The returned data is ', this.galdata);
        //   });

          return this.http.get('/gal/' + type).toPromise();
        // return this.http.get('http://localhost:3000/messages').toPromise();
    }

    getHomeSlide() {
        return this.http.get('/homeslide').toPromise();
    }
}
