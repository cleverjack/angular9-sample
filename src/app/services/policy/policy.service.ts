import { Injectable } from '@angular/core';
import { PolicyGuide } from 'src/constants';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  defaultPolicyGuide: Array<PolicyGuide> = [
    {
      name: 'Global Chat',
      rules: [
        { topic: '0', riskThreshold: 6 },
        { topic: '5', riskThreshold: 5 },
      ]
    },
    {
      name: 'Private Chat',
      rules: [
        { topic: '5', riskThreshold: 6 },
      ]
    }
  ];

  constructor() { }

  getPolicyGuides() {
    // Todo: HttpRequest to get data from Backend API
    // let return default data for now
    return this.defaultPolicyGuide;
  }
}
