export interface IFeatureJob {
  _id: string;
  company: string;
  logo: string;
  jobType: string;
  jobTitle: string;
  spotlightOption: string[];
  locations: string[];
  description: string;
  website: string;
  applyLink: string;
  email: string;
  categories: IProgramLang[];
  createdAt: string;
  updatedAt: string;
}

export interface ISpotlight {
  _id: string;
  duration: string;
  price: number;
  viewMultiplier: number;
  createdAt: string;
  updatedAt: string;
}

export interface ICreateSpotlightPayload {
  duration: string;
  price: number;
  viewMultiplier: number;
}

export interface IProgramLang {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface IFeatureJobPayload {
  company: string;
  logo: string;
  jobType: string;
  jobTitle: string;
  spotlightOption: string;
  locations: string;
  description: string;
  website: string;
  applyLink: string;
  email: string;
  categories: string[];
}

export interface IBoard {
  company: string;
  jobTitle: string;
  _id: string;
  jobType: string;
  logo: string;
  locations: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  spotlightOption: ISpotlightOption;
}

export interface ISpotlightOption {
  _id: string;
  duration: string;
  price: number;
  viewMultiplier: number;
  createdAt: string;
  updatedAt: string;
  __v: 0;
}

export interface IUploadFile {
  url: string;
  fileType: string;
  fileName: string;
}

export interface IPrivacy {
  _id: string;
  title: string;
  content: string;
  privacyAndPolicy: string;
  createdAt: string;
  updatedAt: string;
  __v: 0;
}
