﻿import { Component, EventEmitter } from '@angular/core';
import { UploadOutput, UploadInput, UploadFile, humanizeBytes } from 'ngx-uploader';

@Component({
  selector: 'app-image-applet',
  templateUrl: './image-applet.component.html',
  styleUrls: ['./image-applet.component.css']
})
export class ImageAppletComponent {
    formData: FormData;
    files: UploadFile[];
    uploadInput: EventEmitter<UploadInput>;
    humanizeBytes: Function;
    dragOver: boolean;

    constructor() {
        this.files = []; // local uploading files array
        this.uploadInput = new EventEmitter<UploadInput>(); // input events, we use this to emit data to ngx-uploader
        this.humanizeBytes = humanizeBytes;
    }

    onUploadOutput(output: UploadOutput): void {
        console.log(output); // lets output to see what's going on in the console

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
            this.files[index] = output.file;
        } else if (output.type === 'removed') {
            // remove file from array when removed
            this.files = this.files.filter((file: UploadFile) => file !== output.file);
        } else if (output.type === 'dragOver') { // drag over event
            this.dragOver = true;
        } else if (output.type === 'dragOut') { // drag out event
            this.dragOver = false;
        } else if (output.type === 'drop') { // on drop event
            this.dragOver = false;
        }
    }

    startUpload(): void {  // manually start uploading
        const event: UploadInput = {
            type: 'uploadAll',
            url: 'http://localhost:8080/api/image/upload',
            method: 'POST',
            data: { foo: 'bar' },
            concurrency: 5 // set sequential uploading of files with concurrency 1
        };

        this.uploadInput.emit(event);
    }

    cancelUpload(id: string): void {
        this.uploadInput.emit({ type: 'cancel', id: id });
    }

}
