import { Injectable } from '@angular/core';
import { Http, Request, RequestMethod, RequestOptions, ResponseContentType } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { WindowRefService } from './window-ref.service';
import { DomSanitizer } from '@angular/platform-browser';

interface AudioTracksList {
  Contents: AudioTrack[];
}

@Injectable()
export class DynamicDataService {
  private _window: Window;
  private host: string = 'http://localhost:8080';
  private musicApi: string = '/api/music/tracks';
  private imageArchiveApi: string = '/api/image/archive';

  constructor(private http: Http, windowRef: WindowRefService, private sanitizer:DomSanitizer) {
    this._window = windowRef.nativeWindow;
  }

  getMusicTracks(): Promise<AudioTracksList> {
    return this.http.get(this.host + this.musicApi).toPromise().then(response => response.json());
  }

  getMusicUrlBase() {
    return this.host + this.musicApi;
  }

  getImagesArchive(payload: Object) {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/zip'
    });
    let options = new RequestOptions({
      method: RequestMethod.Post,
      url: `${this.host}${this.imageArchiveApi}`,
      body: payload
    });
    options.responseType = ResponseContentType.Blob;

    this.http.post(options.url, options.body).toPromise().then(response => {
      console.log(response);
    })
      //.map(response => {
      //  let fileBlob = response.blob();
      //  let blob = new Blob([fileBlob], {
      //    type: 'application/zip'
      //  });
	  //
      //  let url = this._window.URL.createObjectURL(blob);
      //  this.sanitizer.bypassSecurityTrustUrl(url);
      //});
  }

}
