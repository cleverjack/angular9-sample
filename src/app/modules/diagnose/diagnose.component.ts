/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable sort-imports */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/shared-components/user.service';
import { User } from 'src/app/shared-components/user';
import { DiagnoseService } from 'src/app/services/diagnose/diagnose.service';
import { PolicyService } from 'src/app/services/policy/policy.service';
import { ContentType, DefaultClient, DefaultContentType, DefaultLanguage, DiagnoseSearchParams, Policy, PolicyGuide, PolicyRule } from 'src/constants';
import { FailingFragment, Slots, TextInput } from 'classify-text-swagger-client';
import { Subscription } from 'rxjs';

interface Mistake extends FailingFragment {
  original: string,
  failTopic: { [key: string]: any },
}

@Component({
  selector: 'app-diagnose',
  templateUrl: './diagnose.component.html',
  styleUrls: [ './diagnose.component.less' ]
})
export class DiagnoseComponent implements OnInit, OnDestroy {
  user: User;
  isDeep = false;
  isLoading = true;
  isShowRegressionBox = false;
  isError = false;

  keyWord = '';
  predictions: { [lang: string]: any } = {};
  topics: { [topic: string]: any } = {};
  policyGuides: Array<PolicyGuide> = [];
  policies: Array<Policy> = [];
  failingFragments: Array<Mistake> = [];
  extended: Array<Slots> = [];

  // Content type variables
  selectedContentType = DefaultContentType;
  contentTypeList = ContentType

  isDefaultActiveDeeperAnalysis = false;

  searchSubscription: Subscription = new Subscription();
  searchInput: TextInput = {
    text: '',
    clientId: DefaultClient,
    language: DefaultLanguage,
    contentType: DefaultContentType,
  };

  constructor (
    public userService: UserService,
    public policyService: PolicyService,
    private diagnoseService: DiagnoseService,
    private route: ActivatedRoute
  ) { }

  async ngOnInit (): Promise<void> {
    // get user data
    this.user = await this.userService.me();

    // get policy data
    this.policyGuides = this.policyService.getPolicyGuides();

    // get keyWord from url & call search
    this.searchSubscription.add(this.route.queryParams.subscribe(params => {
      if (params.hasOwnProperty(DiagnoseSearchParams)) {
        // update search input to memo
        const { lastClientId, lastContentType, language } = this.userService.preferences;
        this.searchInput = {
          text: params[DiagnoseSearchParams],
          clientId: lastClientId,
          contentType: lastContentType,
          language,
        };

        this.onSearch();
      } else {
        this.isLoading = false;
        this.isError = true;
      }
    }));
  }

  ngOnDestroy (): void {
    this.searchSubscription.unsubscribe();
  }

  async onSearch () {
    try {
      // handle loading-indicator
      this.isError = false;
      this.isLoading = true;

      // get data from Backend API
      const searchResult = await this.diagnoseService.search(this.searchInput);

      // Show original text on the sidebar
      this.keyWord = searchResult.text;

      // Prediction data for AI prediction component
      this.predictions = searchResult.predictions;

      // Extended data for diagnose-text component
      this.extended = searchResult.extended;

      // set topic data for topic component
      const topics: { [topic: string]: any } = searchResult.topics;
      this.topics = this.handleTopics(topics, this.policyGuides);

      // set policies data for policy component
      const { policyModels } = this.handlePolicies(topics, this.policyGuides);
      this.policies = policyModels;

      this.hideLoading();

      // FailingFragments data for the spelling mistakes component
      const failingFragments = searchResult.failingFragments;
      this.failingFragments = this.handleFailingFragments(failingFragments, this.policyGuides, this.keyWord);
    } catch (e) {
      console.error('[Diagnose Component] onSearch get error: ', e);
      this.isLoading = false;
      this.isError = true;
    }
  }

  /*
   * get all topic relative with policy guide
   */
  handleTopics (topics: { [topic: string]: any }, policyGuides: Array<PolicyGuide>) {
    // combine all rules of policies to an array
    const combineRule: Array<PolicyRule> = policyGuides.map(policyGuide => policyGuide.rules).flat();
    const ruleTopics = combineRule.map(rule => rule.topic);

    for (const topic in topics) {
      if (!ruleTopics.includes(topic)) {
        delete topics[topic];
      }
    }
    return topics;
  }

  /*
   * Note: This function have 2 usecases for now:
   *  + handle & add isSafe property for policy
   *  + get all fail topic
   */
  handlePolicies (topics: { [topic: string]: any }, policyGuides: Array<PolicyGuide>) {
    const failTopic = {};

    // get array policies
    const policyModels = policyGuides.map(policyGuide => {
      let isSafe = true;
      // check a policy is safe
      for (const rule of policyGuide.rules) {
        const { topic } = rule;
        if (topics.hasOwnProperty(topic)) {
          const riskLevel = topics[topic];
          const riskThreshold = rule.riskThreshold;

          if (riskLevel >= riskThreshold) {
            failTopic[topic] = riskLevel;
            isSafe = false;
            // Don't break here, we still need to get all fail topics
          }
        }
      }

      return ({ isSafe, policyGuide });
    });

    return { policyModels, failTopic };
  }

  handleFailingFragments (failingFragments: Array<FailingFragment>, policyGuides: Array<PolicyGuide>, searchText: string) {
    return failingFragments.map(fragment => {
      const { topics, startPos, endPos } = fragment;
      const { failTopic } = this.handlePolicies(topics, policyGuides);
      const original = searchText.slice(startPos, endPos);
      return { ...fragment, ...{ failTopic, original } };
    });
  }

  hideLoading () {
    setTimeout(() => { this.isLoading = false; }, 300);
  }

  onRefresh () {
    this.onSearch();
  }

  onLanguageChanged (language: string) {
    this.searchInput.language = language;
    this.userService.updatePreferences({ language });
  }

  onContentTypeChanged (contentType: any) {
    this.searchInput.contentType = contentType;
    this.userService.updatePreferences({ lastContentType: contentType });
  }

  onUserChangedClient (newClient: number) {
    this.searchInput.clientId = newClient;
    this.userService.updatePreferences({ lastClientId: newClient });
  }

  onDeeperAnalysisChanged (value: boolean) {
    this.isDeep = value;
  }

  onShowRegressionBox () {
    this.isShowRegressionBox = true;
  }

  onCloseRegressionBox () {
    this.isShowRegressionBox = false;
  }

  onCopy () {
    const currentUrl = window.location.href;
    const el = document.createElement('textarea');
    el.value = currentUrl;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
}
