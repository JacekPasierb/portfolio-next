export interface Certificate {
  title: string;
  description: string;
  image: string;
  account?: {
    login: string;
    password: string;
  };
  pages?: string[];
  github?: string;
  backend?: string;
  strapi?: string;
  demo?: string;
  link?: string;
}
