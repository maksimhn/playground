import { Component, EventEmitter } from '@angular/core';
import { UploadOutput, UploadInput, UploadFile, humanizeBytes } from 'ngx-uploader';
import { DynamicDataService } from '../../services/dynamic-data.service';

@Component({
  selector: 'app-image-applet',
  templateUrl: './image-applet.component.html',
  styleUrls: [ './image-applet.component.css' ]
})
export class ImageAppletComponent {
  _dynamicDataService: DynamicDataService;
  downloadUrl: string;
  clientId: string;
  uploadUrl: string;
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;
  results: Array<{
    name: string,
    download: boolean
  }>;


  constructor(dynamicDataService: DynamicDataService) {
    this.files = []; // local uploading files array
    this.uploadInput = new EventEmitter<UploadInput>(); // input events, we use this to emit data to ngx-uploader
    this.humanizeBytes = humanizeBytes;
    this.results = [];
    this.clientId = Math.random().toString(36).substring(7);
    this.uploadUrl = 'http://localhost:8080/api/image/upload';
    this.downloadUrl = 'http://localhost:8080/api/image/download/';
    this._dynamicDataService = dynamicDataService;
  }

  downloadArchive() {
    let body = [];
    if (this.results.length) {
      this.results.forEach((el) => {
        if (el.download) {
          body.push(el.name);
        }
      });
    }
    this._dynamicDataService.getImagesArchive({ body });
  }

  onUploadOutput(output: UploadOutput): void {
    console.log(output); // lets output to see what's going on in the console
    //this.results.push(output);

    if (output.type === 'allAddedToQueue') { // when all files added in queue
      // uncomment this if you want to auto upload files when added
      // const event: UploadInput = {
      //   type: 'uploadAll',
      //   url: '/api/image',
      //   method: 'POST',
      //   data: { foo: 'bar' },
      //   concurrency: 0
      // };
      // this.uploadInput.emit(event);
    } else if (output.type === 'addedToQueue') {
      this.files.push(output.file); // add file to array when added
    } else if (output.type === 'uploading') {
      // update current data in files array for uploading file
      const index = this.files.findIndex(file => file.id === output.file.id);
      this.files[ index ] = output.file;
    } else if (output.type === 'removed') {
      // remove file from array when removed
      this.files = this.files.filter((file: UploadFile) => file !== output.file);
    } else if (output.type === 'dragOver') { // drag over event
      this.dragOver = true;
    } else if (output.type === 'dragOut') { // drag out event
      this.dragOver = false;
    } else if (output.type === 'drop') { // on drop event
      this.dragOver = false;
    } else if (output.type === 'done') {
      let tempFileData = {
        name: output.file.name,
        index: output.file.fileIndex,
        status: output.type,
        fullUrl: `${this.downloadUrl}${this.clientId}/${output.file.name}`,
        download: false
      };
      this.results.push(tempFileData);
    }
  }

  startUpload(): void {  // manually start uploading
    this.results = [];

    const event: UploadInput = {
      type: 'uploadAll',
      url: this.uploadUrl,
      method: 'POST',
      data: {clientId: this.clientId},
      concurrency: 12 // set sequential uploading of files with concurrency 1
    };

    this.uploadInput.emit(event);
  }

  cancelUpload(id: string): void {
    this.uploadInput.emit({type: 'cancel', id: id});
  }

}
