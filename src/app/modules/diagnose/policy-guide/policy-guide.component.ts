import { Component, OnInit, Input } from '@angular/core';
import { Policy } from 'src/constants';

const SAFE_POLICY = {
  icon: 'fas fa-thumbs-up',
  color: '#7ED321',
}

const UN_SAFE_POLICY = {
  icon: 'fas fa-thumbs-down',
  color: '#ED0423',
}

@Component({
  selector: 'app-policy-guide',
  templateUrl: './policy-guide.component.html',
  styleUrls: ['./policy-guide.component.less']
})
export class PolicyGuideComponent implements OnInit {
  @Input() policy: Policy;
  name: string;
  icon: string;
  color: string;

  constructor() { }

  ngOnInit(): void {
    const { isSafe, policyGuide } = this.policy;

    const { icon, color } = isSafe ? SAFE_POLICY : UN_SAFE_POLICY;
    this.icon = icon;
    this.color = color;
    this.name = policyGuide.name;
  }
}
