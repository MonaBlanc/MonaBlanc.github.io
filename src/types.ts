export interface Challenge {
  caption: string;
  description: string;
  image: string;
  medal: null | string;
  name: string;
  organization: string;
}

export interface Project {
  category: string;
  description: string;
  id: string;
  image: string;
  isVisible: boolean;
  link: string;
  name: string;
  stack: string[];
  tags: string[];
  year: string;
}
