import { Injectable } from '@angular/core';
import { Http, Request, RequestMethod, RequestOptions, ResponseContentType } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { WindowRefService } from './window-ref.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';

interface AudioTracksList {
  Contents: AudioTrack[];
}

@Injectable()
export class DynamicDataService {
  private _window: Window;
  private host: string = 'http://localhost:8080';
  private musicApi: string = '/api/music/tracks';
  private imageArchiveApi: string = '/api/image/archive';

  constructor(private http: Http, windowRef: WindowRefService, private sanitizer: DomSanitizer) {
    this._window = windowRef.nativeWindow;
  }

  getMusicTracks(): Promise<AudioTracksList> {
    return this.http.get(this.host + this.musicApi).toPromise().then(response => response.json());
  }

  getMusicUrlBase() {
    return this.host + this.musicApi;
  }

  getImagesArchive(payload: Object): Observable<Blob> {
    let options = new RequestOptions({responseType: ResponseContentType.Blob});
    return this.http.post(`${this.host}${this.imageArchiveApi}`, payload, options)
      .map(res => {
        return res.blob();
      });
  }
}
