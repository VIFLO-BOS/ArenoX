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
  avatar: string;
  gender: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  username: string;
}
