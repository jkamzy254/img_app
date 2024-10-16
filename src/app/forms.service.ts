import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  imgApi = 'http://127.0.0.1:8000/img/upload/';

  constructor(
    private http: HttpClient,
  ) { }

  uploadImg(model: any): Observable<any> {
    console.log(model);
    const formData = new FormData();

    let resp: any = {}

    formData.append("profileImage", model, model.name);
    console.log(formData);
    
    return this.http.post(this.imgApi, formData);
     
  }
}
