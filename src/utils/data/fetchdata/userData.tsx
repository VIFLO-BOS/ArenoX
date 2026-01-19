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
  };
  username: string;
  designation: string;
  experiences: string[];
  credentials: string;
  bio: string;
  skills: string[];
  languages: string[];
  availability: string;
}
