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
