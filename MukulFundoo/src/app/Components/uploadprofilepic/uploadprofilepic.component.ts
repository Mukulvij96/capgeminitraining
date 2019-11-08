import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DisplayComponent } from '../display/display.component';

import { Image } from 'ngx-image';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { DataserviceService } from '../../services/data services/dataservice.service'
import { AppServiceService } from 'src/app/services/appservices/app-service.service';
import { SnackbarService } from 'src/app/services/snackbarservices/snackbar.service';
@Component({
  selector: 'app-uploadprofilepic',
  templateUrl: './uploadprofilepic.component.html',
  styleUrls: ['./uploadprofilepic.component.scss']
})
export class UploadprofilepicComponent implements OnInit {

  selectedFile: File=null;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  message:string='upload';
  constructor(public dialogRef: MatDialogRef<DisplayComponent>,private snackbar:SnackbarService,
    @Inject(MAT_DIALOG_DATA) dialogData,private dataService:DataserviceService,private appService:AppServiceService) { }

  ngOnInit() {
    this.dataService.currentMessage$.subscribe(
      message => this.message = message);
  }

  fileChangeEvent($event){
    this.imageChangedEvent = event;
  }

  imageCropped($event :ImageCroppedEvent){
    console.log('event',$event)
  this.croppedImage=$event.file;
  }

  onUpload(){
    const fd=new FormData();
    fd.append('file',this.croppedImage);
    this.appService.postImageRequest(fd,'user/uploadProfileImage').subscribe((data:any) => {
      console.log("uploading profile pic")
      // this.snackbar.open("Profile picture changed")
     localStorage.setItem('pic', data.status.imageUrl);
      this.dataService.changeMessage(this.message);
      this.dialogRef.close();
    })
  }
}
