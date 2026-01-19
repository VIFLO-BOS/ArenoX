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

export interface coursesTypes {
  id: number;
  category: string;
  bgColor: string;
  title: string;
  paragraph: string;
  description: string;
  courseImageUrl: string;
  tutor: ITutor;
  highlights: string;
  rating: number;
  hrs: number;
  price: number;
  cta: string;
  language: string;
  level: string;
}

export interface course {
  _id?: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  category: string;
  language: string;
  price: string;
}
