export interface UserType {
  _id: string;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  phone: string;
  website: string;
  role: string;
  image: string;
  gender: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    [key: string]: unknown; // flexible for potential extra address fields
  };
  username: string;
  designation: string;
  experiences: string[];
  credentials: string;
  bio: string;
  skills: string[];
  languages: string[];
  availability: string;
  Image: string;
  education: string[];
  [key: string]: unknown; // Allow flexibility for now to prevent breakages with "any" replacements
  avatar: string;
  userAvatar?: string;
  userImage?: string;
}

export interface UserFormData {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  role: string;
  birthDate: string;
  gender: string;
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  image: string;
  bio: string;
  skills: string[];
  language: string[];
  education: string[];
  availability: string;
  experience: string[];
  [key: string]: unknown;
}


export interface EnrollmentUser {
  status: string;
  enrolledAt: Date;
  userId: string;
  courseId: string;
  userName: string;
  userImage: string;
  userEMail: string;
  userBio: string;
  userPhone: string;
  userAddress: string;
  userCity: string;
  userState: string;
  userZip: string;
  userCountry: string;
  userExperience: string[];
  userSkills: string[];
  userLanguage: string[];
  userEducation: string[];
  userAvailability: string;
  userAvatar: string;
  courseTitle: string;
}
