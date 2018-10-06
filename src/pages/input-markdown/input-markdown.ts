import {Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SendInputProvider} from "../../providers/send-input/send-input";
import {DomSanitizer} from "@angular/platform-browser";

@IonicPage()
@Component({
  selector: 'page-input-markdown',
  templateUrl: 'input-markdown.html',
})
export class InputMarkdownPage{
  contents: string;
  setting: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private sendInputProvider: SendInputProvider,
    private sanitizer: DomSanitizer,
  ) {
    this.setting = "JohnLT"
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad InputMarkdownPage');
  }
  sendPDFData(){
    this.sendInputProvider.getPDF(this.setting, this.contents).subscribe(res =>
    {
      let blob = new Blob([res], {type: 'application/pdf'});
      let fileUrl: any = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(blob));
      this.sendInputProvider.setFileUrl(fileUrl)
    })
  }
}
