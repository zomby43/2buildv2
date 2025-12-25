export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription?: string;
  fullDescription: string;
  image: string;
  order: number;
  icon: string;
}
