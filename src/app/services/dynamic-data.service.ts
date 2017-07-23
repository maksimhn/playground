import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

interface AudioTracksList {
  Contents: AudioTrack[];
}

@Injectable()
export class DynamicDataService {
  private host: string = 'http://localhost:8080';
  private api: string = '/api/music/tracks';

  constructor(private http: Http) { }

  getMusicTracks(): Promise<AudioTracksList> {
    return this.http.get(this.host + this.api).toPromise().then(response => response.json());
  }

  getUrlBase() {
    return this.host + this.api;
  }

}
