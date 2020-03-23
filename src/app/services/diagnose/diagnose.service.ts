import { Injectable } from '@angular/core';
import { DefaultService, TextInput } from 'classify-text-swagger-client';

@Injectable({
  providedIn: 'root'
})
export class DiagnoseService {

  constructor(private api: DefaultService) {}

  search(params?: TextInput) {
    return this.api.classifyText(params).toPromise()
  }
}
