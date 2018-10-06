import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable, NgModule} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable()
@NgModule()
export class SendInputProvider {
  constructor(public http: HttpClient) {
    console.log('Hello SendInputProvider Provider');
  }
  private inputTextSource = new Subject<any>();
  public inputText$ = this.inputTextSource.asObservable();
  setFileUrl(fileUrl: any){
    this.inputTextSource.next(fileUrl);
  }
  getPDF(setting: string, contents: string): Observable<any>{
    let url = 'http://127.0.0.1:5000/hoge';
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    return this.http.get(url, { headers: headers, responseType: 'blob', params: {title: setting, contents: contents}});
  }
}
