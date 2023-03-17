export interface Course {
  id: number;
  name: string;
  subject: string;
  image: string;
  description: string;
  duration: string;
  tags: string[];
  datePublished: Date;
  provider: string;
  dateUpdated: Date;
  rating: number;
}
