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
}

export interface coursesDetails {
  id: number;
  category: string;
  bgColor: string;
  title: string;
  paragraph: string;
  description: string;
  courseImageUrl: string;
  tutor: ITutor;
  rating: number;
  hrs: number;
  price: number;
  cta: string;
}

export interface course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  category: string;
  level: string;
  language: string;
  price: string;
}
