export type Permission = {
  manageUsers?: boolean;
  manageCourses?: boolean;
  managePayments?: boolean;
  viewReport?: boolean;
};

export type UserData = {
  fullName?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  role?: string;
  status?: string;
  permission?: Permission;
  createdAt?: Date;
  agreeToTerms?: boolean;
  [key: string]: unknown;
};