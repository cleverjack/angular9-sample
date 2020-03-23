// Note: I don't know what kind of icon font we need to use
// So I will add font awesome class here
// Todo: refactor the icon
export interface Topic {
  name: string,
  icon: string,
  faIcon: string,
}

export const Topics : { [key: string]: Topic } = {
  0 : { name: 'General Risk', icon: 'numeric-${risk}-box', faIcon: 'fa-comments' },
  1 : { name: 'Bullying', icon: 'account-group', faIcon: 'fa-comments' },
  2 : { name: 'Fighting', icon: 'kabaddi', faIcon: 'fa-comments' },
  3 : { name: 'Personal Information', icon: 'account-search', faIcon: 'fa-comments' },
  4 : { name: 'Dating and Sexting', icon: 'heart', faIcon: 'fa-heart' },
  5 : { name: 'Vulgar', icon: 'chat-alert', faIcon: 'fa-angry' },
  6 : { name: 'Drugs and Alcohol', icon: 'cannabis', faIcon: 'fa-comments' },
  7 : { name: 'In-Game Items', icon: 'cube-outline', faIcon: 'fa-comments' },
  8 : { name: 'Alarm', icon: 'alert-decagram', faIcon: 'fa-comments' },
  9 : { name: 'Fraud', icon: 'cash', faIcon: 'fa-comments' },
  10 : { name: 'Racist', icon: 'whistle', faIcon: 'fa-comments' },
  11 : { name: 'Religion', icon: 'church', faIcon: 'fa-comments' },
  13 : { name: 'Website', icon: 'link', faIcon: 'fa-comments' },
  14 : { name: 'Grooming', icon: 'account-child', faIcon: 'fa-comments' },
  15 : { name: 'Public Threats', icon: 'target-account', faIcon: 'fa-comments' },
  16 : { name: 'Real Name', icon: 'account-badge-horizontal', faIcon: 'fa-comments' },
  17 : { name: 'Radicalization', icon: 'bullhorn', faIcon: 'fa-comments' },
  18 : { name: 'Subversive', icon: 'guy-fawkes-mask', faIcon: 'fa-comments' },
  19 : { name: 'Sentiment', icon: 'emoticon', faIcon: 'fa-comments' },
  20 : { name: 'Politics', icon: 'gavel', faIcon: 'fa-comments' },
  27 : { name: 'Custom1', icon: 'number-1-circle-outline', faIcon: 'fa-comments' },
  28 : { name: 'Custom2', icon: 'number-2-circle-outline', faIcon: 'fa-comments' },
  29 : { name: 'Custom3', icon: 'number-3-circle-outline', faIcon: 'fa-comments' },
  30 : { name: 'Custom4', icon: 'number-4-circle-outline', faIcon: 'fa-comments' },
  31 : { name: 'Custom5', icon: 'number-5-circle-outline', faIcon: 'fa-comments' },
};

export type TopicPickerSelected = {
  [topicNumber: string]: Topic
}

export const generalRiskTopic = 0;

export interface PolicyRule {
  topic: string,
  riskThreshold: any
}

export interface PolicyGuide {
  name: string,
  rules: Array<PolicyRule>
}

export class Policy {
  isSafe: boolean;
  policyGuide: PolicyGuide;
}

export interface RiskLevel {
  name: string,
  color: string,
}

export const RiskLevels : { [key: string]: RiskLevel } = {
  0 : { name: 'Always Safe', color: '#7ED321' },
  1 : { name: 'Very Safe', color: '#4de761' },
  2 : { name: 'Grey', color: '#afb8a1' },
  3 : { name: 'Questionable', color: '#fbcb40' },
  4 : { name: 'Unknow', color: '#2d96fe' },
  5 : { name: 'Mild', color: '#f6715b' },
  6 : { name: 'Offensive', color: '#f17209' },
  7 : { name: 'Obscene', color: '#ed1c24' },
};

export interface Language {
  code:string;
  name:string;
  partial?:boolean;
}

export const Languages : Language[] = [
  { code: 'ar', name: 'Arabic', partial: false },
  { code: 'da', name: 'Danish', partial: true },
  { code: 'de', name: 'German', partial: false },
  { code: 'en', name: 'English', partial: false },
  { code: 'es', name: 'Spanish', partial: false },
  { code: 'fi', name: 'Finnish', partial: false },
  { code: 'fr', name: 'French', partial: false },
  { code: 'hi', name: 'Hindi', partial: true },
  { code: 'id', name: 'Indonesian', partial: false },
  { code: 'it', name: 'Italian', partial: false },
  { code: 'ja', name: 'Japanese', partial: false },
  { code: 'ko', name: 'Korean', partial: false },
  { code: 'nl', name: 'Dutch', partial: false },
  { code: 'no', name: 'Norwegian', partial: true },
  { code: 'pl', name: 'Polish', partial: false },
  { code: 'pt', name: 'Portuguese', partial: false },
  { code: 'ro', name: 'Romanian', partial: false },
  { code: 'ru', name: 'Russian', partial: false },
  { code: 'sv', name: 'Swedish', partial: true },
  { code: 'th', name: 'Thai', partial: false },
  { code: 'tr', name: 'Turkish', partial: false },
  { code: 'vi', name: 'Vietnamese', partial: false },
  { code: 'zh', name: 'Chinese', partial: false },
];

export interface SelectBoxItem {
  content:string;
  value:string | number;
}

export const ContentType = [
  { content: 'Short Text', value: 'SHORT_TEXT' },
  { content: 'Long Text', value: 'LONG_TEXT' },
  { content: 'User Name', value: 'USERNAME' },
];

export const DiagnoseSearchParams = 'keyword';

// Set the default client
export const DefaultClient = 0;

// Set the default language to English
export const DefaultLanguage = 'en';

// Set the default ContentType to SHORT_TEXT
export const DefaultContentType = 'SHORT_TEXT';