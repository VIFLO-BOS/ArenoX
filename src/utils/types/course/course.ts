
export interface ITutorContact {
  email: string;
  phone: string;
  whatsapp: string;
  linkedin: string;
  instagram: string;
  facebook: string;
  x: string;
  website: string;
  location: string;
}

export interface ITutor {
  name: string;
  imageUrl: string;
  designation: string;
  experience: string;
  credentials: string;
  bio: string;
  contact: ITutorContact;
  experiences: string[];
  skills: string[];
  languages: string[];
  availability: string;
  Image: string;
  [key: string]: unknown;
}

export interface CourseType {
  _id?: string;
  id?: number; // Added to support static data
  category: string;
  bgColor: string;
  title: string;
  paragraph: string;
  description: string;
  courseImageUrl: string;
  tutor?: ITutor; // Optional for static data
  highlights?: string; // Optional
  rating: string;
  hrs: number;
  price: string;
  cta: string;
  language?: string; // Optional
  level?: string; // Optional
  duration?: number; // Optional
}

export interface course {
  _id?: string;
  title: string;
  description: string;
  instructor: string;
  category: string;
  language: string;
  price: string;
  level: string;
  duration: number;
}

export type CourseInput = course;
