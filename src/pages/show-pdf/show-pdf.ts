import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SendInputProvider} from "../../providers/send-input/send-input";

@IonicPage()
@Component({
  selector: 'page-show-pdf',
  templateUrl: 'show-pdf.html',
})
export class ShowPdfPage implements OnInit{
  fileUrl: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private sendInputProvider: SendInputProvider,
  ) {}
  ngOnInit() {
    this.sendInputProvider.inputText$.subscribe(fileUrl =>
    {
      this.fileUrl = fileUrl;
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowPdfPage');
  }
}
