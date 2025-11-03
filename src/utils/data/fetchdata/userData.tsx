export interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  birthDate: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  login: { 
    uuid: string;
    username: string;
    password: string;
    md5: string;
    sha1: string;
    registered: string;
  };
  userType: string;
  studentDetails?: {
    studentId: string;
    enrollmentDate: string;
    courses: string[];
    gradeLevel: string;
    gpa: number;
    gmail: string;
    socialMedia: {
      twitter: string;
      instagram: string;
      linkedin: string;
    };
  };
}

export const userData = [
  {
    id: 1,
    firstname: "John",
    lastname: "Doe",
    email: "johndoe@example.com",
    birthDate: "1973-01-22",
    login: {
      uuid: "1a0eed01-9430-4d68-901f-c0d4c1c3bf22",
      username: "johndoe",
      password: "jsonplaceholder.org",
      md5: "c1328472c5794a25723600f71c1b4586",
      sha1: "35544a31cc19bd6520af116554873167117f4d94",
      registered: "2023-01-10T10:03:20.022Z",
    },
    address: {
      street: "123 Main Street",
      suite: "Apt. 4",
      city: "Anytown",
      zipcode: "12345-6789",
      geo: {
        lat: "42.1234",
        lng: "-71.2345",
      },
    },
    phone: "(555) 555-1234",
    website: "www.johndoe.com",
    company: {
      name: "ABC Company",
      catchPhrase: "Innovative solutions for all your needs",
      bs: "Marketing",
    },
    userType: "tutor"
  },
  {
    id: 2,
    firstname: "Jane",
    lastname: "Smith",
    email: "janesmith@example.com",
    birthDate: "1983-02-22",
    login: {
      uuid: "2a0eed02-9430-4d68-901f-c0d4c1c3bf22",
      username: "janesmith",
      password: "jsonplaceholder.org",
      md5: "c1328472c5794a25723600f71c1b4586",
      sha1: "35544a31cc19bd6520af116554873167117f4d94",
      registered: "2022-06-10T12:45:20.022Z",
    },
    address: {
      street: "456 Oak Street",
      suite: "Suite 200",
      city: "Anytown",
      zipcode: "12345-6789",
      geo: {
        lat: "42.3456",
        lng: "-71.6789",
      },
    },
    phone: "(555) 555-5678",
    website: "www.janesmith.com",
    company: {
      name: "XYZ Corporation",
      catchPhrase: "Leading the way in innovation",
      bs: "Finance",
    },
    userType: "tutor"
  },
  {
    id: 3,
    firstname: "Bob",
    lastname: "Johnson",
    email: "bobjohnson@example.com",
    birthDate: "1974-11-12",
    login: {
      uuid: "3a0eed11-9430-4d68-901f-c0d4c1c3bf12",
      username: "bobjohnson",
      password: "jsonplaceholder.org",
      md5: "c1328472c5794a25723600f71c1b4586",
      sha1: "35544a31cc19bd6520af116554873167117f4d94",
      registered: "2022-06-10T12:45:20.022Z",
    },
    address: {
      street: "789 Elm Street",
      suite: "Apt. 100",
      city: "Anytown",
      zipcode: "12345-6789",
      geo: {
        lat: "42.5678",
        lng: "-71.1234",
      },
    },
    phone: "(555) 555-9012",
    website: "www.bobjohnson.com",
    company: {
      name: "Acme Corporation",
      catchPhrase: "Your trusted partner",
      bs: "Manufacturing",
    },
    userType: "tutor"
  },
  {
    id: 4,
    firstname: "Emily",
    lastname: "Davis",
    email: "emilydavis@example.com",
    birthDate: "1974-11-30",
    login: {
      uuid: "4a0eed11-9430-4d68-901f-c0d4c1c3bf30",
      username: "emilydavis",
      password: "jsonplaceholder.org",
      md5: "c1328472c5794a25723600f71c1b4586",
      sha1: "35544a31cc19bd6520af116554873167117f4d94",
      registered: "2022-07-10T11:21:20.033Z",
    },
    address: {
      street: "321 Maple Street",
      suite: "Apt. 50",
      city: "Anytown",
      zipcode: "12345-6789",
      geo: {
        lat: "42.9012",
        lng: "-71.5678",
      },
    },
    phone: "(555) 555-3456",
    website: "www.emilydavis.com",
    company: {
      name: "GHI Corporation",
      catchPhrase: "Your success is our priority",
      bs: "Consulting",
    },
    userType: "tutor"
  },
  {
    id: 5,
    firstname: "William",
    lastname: "Brown",
    email: "williambrown@example.com",
    birthDate: "1974-11-22",
    login: {
      uuid: "5a0eed11-9430-4d68-901f-c0d4c1c3bf22",
      username: "williambrown",
      password: "jsonplaceholder.org",
      md5: "c1328472c5794a25723600f71c1b4586",
      sha1: "35544a31cc19bd6520af116554873167117f4d94",
      registered: "2021-02-10T10:38:03.030Z",
    },
    address: {
      street: "567 Pine Street",
      suite: "Apt. 2",
      city: "Anytown",
      zipcode: "12345-6789",
      geo: {
        lat: "42.6789",
        lng: "-71.9012",
      },
    },
    phone: "(555) 555-6789",
    website: "www.williambrown.com",
    company: {
      name: "JKL Industries",
      catchPhrase: "Quality products for a better world",
      bs: "Engineering",
    },
    userType: "tutor"
  },
  {
    id: 6,
    firstname: "Laura",
    lastname: "Wilson",
    email: "laurawilson@example.com",
    birthDate: "1984-12-14",
    login: {
      uuid: "6a0eed12-9430-4d68-901f-c0d4c1c3bf14",
      username: "laurawilson",
      password: "jsonplaceholder.org",
      md5: "c1328472c5794a25723600f71c1b4586",
      sha1: "35544a31cc19bd6520af116554873167117f4d94",
      registered: "2022-01-10T09:03:03.030Z",
    },
    address: {
      street: "789 Maple Street",
      suite: "Apt. 10",
      city: "Anytown",
      zipcode: "12345-6789",
      geo: {
        lat: "42.3456",
        lng: "-71.2345",
      },
    },
    phone: "(555) 555-1234",
    website: "www.laurawilson.com",
    company: {
      name: "LMN Corporation",
      catchPhrase: "Innovative solutions for a better future",
      bs: "Technology",
    },
    userType: "tutor"
  },
  {
    id: 7,
    firstname: "Michael",
    lastname: "Garcia",
    email: "michaelgarcia@example.com",
    birthDate: "1984-12-14",
    login: {
      uuid: "7a0eed12-9430-4d68-901f-c0d4c1c3bf14",
      username: "michaelgarcia",
      password: "jsonplaceholder.org",
      md5: "c1328472c5794a25723600f71c1b4586",
      sha1: "35544a31cc19bd6520af116554873167117f4d94",
      registered: "2023-01-10T09:03:03.030Z",
    },
    address: {
      street: "234 Elm Street",
      suite: "Apt. 20",
      city: "Anytown",
      zipcode: "12345-6789",
      geo: {
        lat: "42.5678",
        lng: "-71.6789",
      },
    },
    phone: "(555) 555-9012",
    website: "www.michaelgarcia.com",
    company: {
      name: "NOP Enterprises",
      catchPhrase: "Your partner in success",
      bs: "Consulting",
    },
    userType: "tutor"
  },
  {
    id: 8,
    firstname: "Stephanie",
    lastname: "Lee",
    email: "stephanielee@example.com",
    birthDate: "1983-02-13",
    login: {
      uuid: "8a0eed02-9430-4d68-901f-c0d4c1c3bf13",
      username: "stephanielee",
      password: "jsonplaceholder.org",
      md5: "c1328472c5794a25723600f71c1b4586",
      sha1: "35544a31cc19bd6520af116554873167117f4d94",
      registered: "2023-01-10T09:03:34.330Z",
    },
    address: {
      street: "345 Oak Street",
      suite: "Suite 500",
      city: "Anytown",
      zipcode: "12345-6789",
      geo: {
        lat: "42.9012",
        lng: "-71.1234",
      },
    },
    phone: "(555) 555-3456",
    website: "www.stephanielee.com",
    company: {
      name: "PQR Industries",
      catchPhrase: "Innovative solutions for your needs",
      bs: "Manufacturing",
    },
    userType: "tutor"
  },
  {
    id: 9,
    firstname: "David",
    lastname: "Hernandez",
    email: "davidhernandez@example.com",
    birthDate: "2000-11-10",
    login: {
      uuid: "9a0eed11-9430-4d68-901f-c0d4c1c3bf10",
      username: "davidhernandez",
      password: "jsonplaceholder.org",
      md5: "c1328472c5794a25723600f71c1b4586",
      sha1: "35544a31cc19bd6520af116554873167117f4d94",
      registered: "2023-01-10T09:02:34.330Z",
    },
    address: {
      street: "456 Pine Street",
      suite: "Apt. 100",
      city: "Anytown",
      zipcode: "12345-6789",
      geo: {
        lat: "42.5678",
        lng: "-71.9012",
      },
    },
    phone: "(555) 555-6789",
    website: "www.davidhernandez.com",
    company: {
      name: "RST Corporation",
      catchPhrase: "Innovative solutions for your business",
      bs: "Consulting",
    },
    userType: "student",
    studentDetails: {
      studentId: "S009",
      enrollmentDate: "2023-01-10",
      courses: ["Computer Science", "Mathematics", "Data Structures"],
      gradeLevel: "Senior",
      gpa: 3.7,
      gmail: "davidhernandez@gmail.com",
      socialMedia: {
        twitter: "@davidhernandez",
        instagram: "davidhernandez",
        linkedin: "/in/david-hernandez"
      }
    }
  },
  {
    id: 10,
    firstname: "Jessica",
    lastname: "Perez",
    email: "jessicaperez@example.com",
    birthDate: "1988-11-13",
    login: {
      uuid: "10aeed11-9430-4d68-901f-c0d4c1c3bf13",
      username: "jessicaperez",
      password: "jsonplaceholder.org",
      md5: "c1328472c5794a25723600f71c1b4586",
      sha1: "35544a31cc19bd6520af116554873167117f4d94",
      registered: "2023-01-09T09:01:33.330Z",
    },
    address: {
      street: "789 Oak Street",
      suite: "Suite 300",
      city: "Anytown",
      zipcode: "12345-6789",
      geo: {
        lat: "42.9012",
        lng: "-71.5678",
      },
    },
    phone: "(555) 555-9012",
    website: "www.jessicaperez.com",
    company: {
      name: "UVW Corporation",
      catchPhrase: "Innovative solutions for a better world",
      bs: "Technology",
    },
    userType: "student",
    studentDetails: {
      studentId: "S010",
      enrollmentDate: "2023-01-09",
      courses: ["Nursing", "Anatomy", "Medical Ethics"],
      gradeLevel: "Graduate",
      gpa: 3.8,
      gmail: "jessicaperez@gmail.com",
      socialMedia: {
        twitter: "@jessicaperez",
        instagram: "jessicaperez",
        linkedin: "/in/jessica-perez"
      }
    }
  },
  {
    id: 11,
    firstname: "Mark",
    lastname: "Thompson",
    email: "markthompson@example.com",
    birthDate: "1999-01-17",
    login: {
      uuid: "11aeed01-9430-4d68-901f-c0d4c1c3bf17",
      username: "markthompson",
      password: "jsonplaceholder.org",
      md5: "c1328472c5794a25723600f71c1b4586",
      sha1: "35544a31cc19bd6520af116554873167117f4d94",
      registered: "2023-01-08T09:00:33.330Z",
    },
    address: {
      street: "123 Elm Street",
      suite: "Apt. 1",
      city: "Anytown",
      zipcode: "12345-6789",
      geo: {
        lat: "42.1234",
        lng: "-71.2345",
      },
    },
    phone: "(555) 555-1234",
    website: "www.markthompson.com",
    company: {
      name: "LMN Enterprises",
      catchPhrase: "Your partner for success",
      bs: "Consulting",
    },
    userType: "student",
    studentDetails: {
      studentId: "S011",
      enrollmentDate: "2023-01-08",
      courses: ["Business Administration", "Economics", "Marketing"],
      gradeLevel: "Graduate",
      gpa: 3.4,
      gmail: "markthompson@gmail.com",
      socialMedia: {
        twitter: "@markthompson",
        instagram: "markthompson",
        linkedin: "/in/mark-thompson"
      }
    }
  },
  {
    id: 12,
    firstname: "Lisa",
    lastname: "Rodriguez",
    email: "lisarodriguez@example.com",
    birthDate: "1999-01-17",
    login: {
      uuid: "12aeed01-9430-4d68-901f-c0d4c1c3bf17",
      username: "lisarodriguez",
      password: "jsonplaceholder.org",
      md5: "c1328472c5794a25723600f71c1b4586",
      sha1: "35544a31cc19bd6520af116554873167117f4d94",
      registered: "2023-01-09T05:51:59.390Z",
    },
    address: {
      street: "456 Maple Street",
      suite: "Apt. 30",
      city: "Anytown",
      zipcode: "12345-6789",
      geo: {
        lat: "42.3456",
        lng: "-71.6789",
      },
    },
    phone: "(555) 555-5678",
    website: "www.lisarodriguez.com",
    company: {
      name: "NOP Corporation",
      catchPhrase: "Your success is our priority",
      bs: "Consulting",
    },
    userType: "student",
    studentDetails: {
      studentId: "S012",
      enrollmentDate: "2023-01-09",
      courses: ["Graphic Design", "Art History", "Digital Media"],
      gradeLevel: "Graduate",
      gpa: 3.8,
      gmail: "lisarodriguez@gmail.com",
      socialMedia: {
        twitter: "@lisarodriguez",
        instagram: "lisarodriguez",
        linkedin: "/in/lisa-rodriguez"
      }
    }
  },
  {
    id: 13,
    firstname: "Julia",
    lastname: "Kim",
    email: "juliakim@example.com",
    birthDate: "2002-11-11",
    login: {
      uuid: "13aeed11-9430-4d68-901f-c0d4c1c3bf11",
      username: "juliakim",
      password: "jsonplaceholder.org",
      md5: "c1328472c5794a25723600f71c1b4586",
      sha1: "35544a31cc19bd6520af116554873167117f4d94",
      registered: "2017-08-09T05:51:59.390Z",
    },
    address: {
      street: "123 Cherry Street",
      suite: "Apt. 100",
      city: "Anytown",
      zipcode: "12345-6789",
      geo: {
        lat: "42.1234",
        lng: "-71.2345",
      },
    },
    phone: "(555) 555-1234",
    website: "www.juliakim.com",
    company: {
      name: "ABC Corporation",
      catchPhrase: "Your trusted partner",
      bs: "Consulting",
    },
    userType: "student",
    studentDetails: {
      studentId: "S013",
      enrollmentDate: "2017-08-09",
      courses: ["Biology", "Chemistry", "Environmental Science"],
      gradeLevel: "Junior",
      gpa: 3.9,
      gmail: "juliakim@gmail.com",
      socialMedia: {
        twitter: "@juliakim",
        instagram: "juliakim",
        linkedin: "/in/julia-kim"
      }
    }
  },
  {
    id: 14,
    firstname: "Max",
    lastname: "Brown",
    email: "maxbrown@example.com",
    birthDate: "2007-10-07",
    login: {
      uuid: "14aeed10-9430-4d68-901f-c0d4c1c3bf07",
      username: "maxbrown",
      password: "jsonplaceholder.org",
      md5: "c1328472c5794a25723600f71c1b4586",
      sha1: "35544a31cc19bd6520af116554873167117f4d94",
      registered: "2022-06-13T11:38:33.010Z",
    },
    address: {
      street: "456 Oak Street",
      suite: "Apt. 200",
      city: "Anytown",
      zipcode: "12345-6789",
      geo: {
        lat: "42.3456",
        lng: "-71.6789",
      },
    },
    phone: "(555) 555-5678",
    website: "www.maxbrown.com",
    company: {
      name: "XYZ Enterprises",
      catchPhrase: "Innovative solutions for your needs",
      bs: "Technology",
    },
    userType: "student",
    studentDetails: {
      studentId: "S014",
      enrollmentDate: "2022-06-13",
      courses: ["Introduction to Programming", "Algebra", "History"],
      gradeLevel: "Freshman",
      gpa: 3.2,
      gmail: "maxbrown@gmail.com",
      socialMedia: {
        twitter: "@maxbrown",
        instagram: "maxbrown",
        linkedin: "/in/max-brown"
      }
    }
  },
  {
    id: 15,
    firstname: "Oliver",
    lastname: "Martinez",
    email: "olivermartinez@example.com",
    birthDate: "2001-11-03",
    login: {
      uuid: "15aeed01-9430-4d68-901f-c0d4c1c3bf03",
      username: "olivermartinez",
      password: "jsonplaceholder.org",
      md5: "c1328472c5794a25723600f71c1b4586",
      sha1: "35544a31cc19bd6520af116554873167117f4d94",
      registered: "2022-06-13T11:38:33.010Z",
    },
    address: {
      street: "789 Elm Street",
      suite: "Apt. 30",
      city: "Anytown",
      zipcode: "12345-6789",
      geo: {
        lat: "42.5678",
        lng: "-71.9012",
      },
    },
    phone: "(555) 555-9012",
    website: "www.olivermartinez.com",
    company: {
      name: "PQR Corporation",
      catchPhrase: "Innovative solutions for your success",
      bs: "Consulting",
    },
    userType: "student",
    studentDetails: {
      studentId: "S015",
      enrollmentDate: "2022-06-13",
      courses: ["Literature", "Foreign Language", "Psychology"],
      gradeLevel: "Sophomore",
      gpa: 3.6,
      gmail: "olivermartinez@gmail.com",
      socialMedia: {
        twitter: "@olivermartinez",
        instagram: "olivermartinez",
        linkedin: "/in/oliver-martinez"
      }
    }
  },
  {
    id: 16,
    firstname: "Sophie",
    lastname: "Lee",
    email: "sophielee@example.com",
    birthDate: "1982-04-12",
    login: {
      uuid: "16beed04-1433-3ds8-901f-d0d4c1c3bac0",
      username: "sophielee",
      password: "jsonplaceholder.org",
      md5: "c1328472c5794a25723600f71c1b4586",
      sha1: "35544a31cc19bd6520af116554873167117f4d94",
      registered: "2022-08-11T11:38:33.330Z",
    },
    address: {
      street: "321 Pine Street",
      suite: "Apt. 40",
      city: "Anytown",
      zipcode: "12345-6789",
      geo: {
        lat: "42.9012",
        lng: "-71.5678",
      },
    },
    phone: "(555) 555-3456",
    website: "www.sophielee.com",
    company: {
      name: "GHI Enterprises",
      catchPhrase: "Innovative solutions for a better future",
      bs: "Technology",
    },
    userType: "tutor"
  },
  {
    id: 17,
    firstname: "Mia",
    lastname: "Nguyen",
    email: "mianuguyen@example.com",
    birthDate: "1980-05-22",
    login: {
      uuid: "17beed05-9400-3ds8-901f-d0d4c1c3bfb0",
      username: "mianuguyen",
      password: "jsonplaceholder.org",
      md5: "c1328472c5794a25723600f71c1b4586",
      sha1: "35544a31cc19bd6520af116554873167117f4d94",
      registered: "2022-08-11T10:33:33.330Z",
    },
    address: {
      street: "567 Oak Street",
      suite: "Apt. 50",
      city: "Anytown",
      zipcode: "12345-6789",
      geo: {
        lat: "42.6789",
        lng: "-71.9012",
      },
    },
    phone: "(555) 555-9012",
    website: "www.mianuguyen.com",
    company: {
      name: "JKL Enterprises",
      catchPhrase: "Innovative solutions for your needs",
      bs: "Technology",
    },
    userType: "tutor"
  },
  {
    id: 18,
    firstname: "Lucas",
    lastname: "Kim",
    email: "lucaskim@example.com",
    birthDate: "1980-05-22",
    login: {
      uuid: "18beed16-9400-4d68-901f-d0d4c1c3bfb0",
      username: "lucaskim",
      password: "jsonplaceholder.org",
      md5: "c1328472c5794a25723600f71c1b4586",
      sha1: "35544a31cc19bd6520af116554873167117f4d94",
      registered: "2022-02-01T10:03:33.330Z",
    },
    address: {
      street: "789 Cherry Street",
      suite: "Apt. 60",
      city: "Anytown",
      zipcode: "12345-6789",
      geo: {
        lat: "42.3456",
        lng: "-71.2345",
      },
    },
    phone: "(555) 555-5678",
    website: "www.lucaskim.com",
    company: {
      name: "LMN Industries",
      catchPhrase: "Innovative solutions for your success",
      bs: "Manufacturing",
    },
    userType: "tutor"
  },
  {
    id: 19,
    firstname: "Isabella",
    lastname: "Hernandez",
    email: "isabellahernandez@example.com",
    birthDate: "1980-09-26",
    login: {
      uuid: "190eed16-9400-4d68-901f-d0d4c1c3bf00",
      username: "isabellahernandez",
      password: "jsonplaceholder.org",
      md5: "c1328472c5794a25723600f71c1b4586",
      sha1: "35544a31cc19bd6520af116554873167117f4d94",
      registered: "2022-02-01T10:01:45.010Z",
    },
    address: {
      street: "123 Pine Street",
      suite: "Apt. 70",
      city: "Anytown",
      zipcode: "12345-6789",
      geo: {
        lat: "42.1234",
        lng: "-71.9012",
      },
    },
    phone: "(555) 555-1234",
    website: "www.isabellahernandez.com",
    company: {
      name: "NOP Industries",
      catchPhrase: "Innovative solutions for your business",
      bs: "Consulting",
    },
    userType: "tutor"
  },
  {
    id: 20,
    firstname: "Ethan",
    lastname: "Kim",
    email: "ethankim@example.com",
    birthDate: "1983-03-06",
    login: {
      uuid: "20aeed13-3420-2f38-111f-c0d4c1c3bf01",
      username: "ethankim",
      password: "jsonplaceholder.org",
      md5: "c1328472c5794a25723600f71c1b4586",
      sha1: "35544a31cc19bd6520af116554873167117f4d94",
      registered: "2022-02-01T11:01:44.010Z",
    },
    address: {
      street: "456 Maple Street",
      suite: "Apt. 80",
      city: "Anytown",
      zipcode: "12345-6789",
      geo: {
        lat: "42.5678",
        lng: "-71.2345",
      },
    },
    phone: "(555) 555-5678",
    website: "www.ethankim.com",
    company: {
      name: "PQR Enterprises",
      catchPhrase: "Innovative solutions for a better world",
      bs: "Technology",
    },
    userType: "tutor"
  },
  {
    id: 21,
    firstname: "Ava",
    lastname: "Patel",
    email: "avapatel@example.com",
    birthDate: "1983-08-01",
    login: {
      uuid: "21aeed01-3221-2f48-111f-c0d4c1c3bf20",
      username: "avapatel",
      password: "jsonplaceholder.org",
      md5: "c1328472c5794a25723600f71c1b4586",
      sha1: "35544a31cc19bd6520af116554873167117f4d94",
      registered: "2022-01-01T09:00:00.000Z",
    },
    address: {
      street: "789 Maple Street",
      suite: "Apt. 90",
      city: "Anytown",
      zipcode: "12345-6789",
      geo: {
        lat: "42.5678",
        lng: "-71.9012",
      },
    },
    phone: "(555) 555-9012",
    website: "www.avapatel.com",
    company: {
      name: "UVW Enterprises",
      catchPhrase: "Innovative solutions for your needs",
      bs: "Consulting",
    },
    userType: "tutor"
  },
  {
    id: 22,
    firstname: "William",
    lastname: "Kim",
    email: "williamkim@example.com",
    birthDate: "1983-08-01",
    login: {
      uuid: "22aeed11-3420-2f38-111f-c0d4c1c3bf00",
      username: "williamkim",
      password: "jsonplaceholder.org",
      md5: "c1328472c5794a25723600f71c1b4586",
      sha1: "35544a31cc19bd6520af116554873167117f4d94",
      registered: "2021-03-25T09:38:02.390Z",
    },
    address: {
      street: "123 Elm Street",
      suite: "Apt. 100",
      city: "Anytown",
      zipcode: "12345-6789",
      geo: {
        lat: "42.1234",
        lng: "-71.5678",
      },
    },
    phone: "(555) 555-1234",
    website: "www.williamkim.com",
    company: {
      name: "JKL Corporation",
      catchPhrase: "Innovative solutions for your business",
      bs: "Consulting",
    },
    userType: "tutor"
  },
  {
    id: 23,
    firstname: "Ella",
    lastname: "Lee",
    email: "ellalee@example.com",
    birthDate: "1983-08-01",
    login: {
      uuid: "23aeed11-9420-4f68-111f-c0d4c1c3bf00",
      username: "ellalee",
      password: "jsonplaceholder.org",
      md5: "c1328472c5794a25723600f71c1b4586",
      sha1: "35544a31cc19bd6520af116554873167117f4d94",
      registered: "2021-07-05T09:12:02.390Z",
    },
    address: {
      street: "456 Pine Street",
      suite: "Apt. 110",
      city: "Anytown",
      zipcode: "12345-6789",
      geo: {
        lat: "42.9012",
        lng: "-71.2345",
      },
    },
    phone: "(555) 555-5678",
    website: "www.ellalee.com",
    company: {
      name: "NOP Industries",
      catchPhrase: "Innovative solutions for your success",
      bs: "Technology",
    },
    userType: "tutor"
  },
  {
    id: 24,
    firstname: "Noah",
    lastname: "Martin",
    email: "noahmartin@example.com",
    birthDate: "1983-09-11",
    login: {
      uuid: "24aeed11-9460-4d78-901f-c0d4c1c3bf00",
      username: "noahmartin",
      password: "jsonplaceholder.org",
      md5: "c1328472c5794a25723600f71c1b4586",
      sha1: "35544a31cc19bd6520af116554873167117f4d94",
      registered: "2021-01-01T09:02:02.390Z",
    },
    address: {
      street: "789 Oak Street",
      suite: "Apt. 120",
      city: "Anytown",
      zipcode: "12345-6789",
      geo: {
        lat: "42.5678",
        lng: "-71.9012",
      },
    },
    phone: "(555) 555-9012",
    website: "www.noahmartin.com",
    company: {
      name: "ABC Enterprises",
      catchPhrase: "Innovative solutions for a better future",
      bs: "Technology",
    },
    userType: "tutor"
  },
  {
    id: 25,
    firstname: "Emma",
    lastname: "Garcia",
    email: "emmagarcia@example.com",
    birthDate: "1983-09-11",
    login: {
      uuid: "25aeed09-9430-4d68-901f-c0d4c1c3bf11",
      username: "emmagarcia",
      password: "jsonplaceholder.org",
      md5: "c1328472c5794a25723600f71c1b4586",
      sha1: "35544a31cc19bd6520af116554873167117f4d94",
      registered: "2021-02-01T08:03:02.390Z",
    },
    address: {
      street: "123 Oak Street",
      suite: "Apt. 130",
      city: "Anytown",
      zipcode: "12345-6789",
      geo: {
        lat: "42.1234",
        lng: "-71.9012",
      },
    },
    phone: "(555) 555-1234",
    website: "www.emmagarcia.com",
    company: {
      name: "GHI Corporation",
      catchPhrase: "Innovative solutions for your needs",
      bs: "Consulting",
    },
    userType: "tutor"
  },
  {
    id: 26,
    firstname: "Aiden",
    lastname: "Martinez",
    email: "aidenmartinez@example.com",
    birthDate: "1983-09-11",
    login: {
      uuid: "26aeed09-9430-4d68-901f-c0d4c1c3bf11",
      username: "aidenmartinez",
      password: "jsonplaceholder.org",
      md5: "c1328472c5794a25723600f71c1b4586",
      sha1: "35544a31cc19bd6520af116554873167117f4d94",
      registered: "2022-02-01T08:03:02.390Z",
    },
    address: {
      street: "456 Cherry Street",
      suite: "Apt. 140",
      city: "Anytown",
      zipcode: "12345-6789",
      geo: {
        lat: "42.5678",
        lng: "-71.2345",
      },
    },
    phone: "(555) 555-5678",
    website: "www.aidenmartinez.com",
    company: {
      name: "JKL Industries",
      catchPhrase: "Innovative solutions for a better world",
      bs: "Manufacturing",
    },
    userType: "tutor"
  },
  {
    id: 27,
    firstname: "Chloe",
    lastname: "Nguyen",
    email: "chloenguyen@example.com",
    birthDate: "1988-12-13",
    login: {
      uuid: "27aeed12-9430-4d68-901f-c0d4c1c3bf13",
      username: "chloenguyen",
      password: "jsonplaceholder.org",
      md5: "c1328472c5794a25723600f71c1b4586",
      sha1: "35544a31cc19bd6520af116554873167117f4d94",
      registered: "2022-01-03T09:03:02.390Z",
    },
    address: {
      street: "789 Maple Street",
      suite: "Apt. 150",
      city: "Anytown",
      zipcode: "12345-6789",
      geo: {
        lat: "42.9012",
        lng: "-71.5678",
      },
    },
    phone: "(555) 555-9012",
    website: "www.chloenguyen.com",
    company: {
      name: "LMN Enterprises",
      catchPhrase: "Innovative solutions for your success",
      bs: "Technology",
    },
    userType: "student",
    studentDetails: {
      studentId: "S027",
      enrollmentDate: "2022-01-03",
      courses: ["Architecture", "Design Principles", "Urban Planning"],
      gradeLevel: "Sophomore",
      gpa: 3.5,
      gmail: "chloenguyen@gmail.com",
      socialMedia: {
        twitter: "@chloenguyen",
        instagram: "chloenguyen",
        linkedin: "/in/chloe-nguyen"
      }
    }
  },
  {
    id: 28,
    firstname: "Liam",
    lastname: "Brown",
    email: "liambrown@example.com",
    birthDate: "2002-01-25",
    login: {
      uuid: "28aeed01-9430-4d68-901f-c0d4c1c3bf25",
      username: "liambrown",
      password: "jsonplaceholder.org",
      md5: "c1328472c5794a25723600f71c1b4586",
      sha1: "35544a31cc19bd6520af116554873167117f4d94",
      registered: "2022-01-02T09:00:01.390Z",
    },
    address: {
      street: "123 Pine Street",
      suite: "Apt. 160",
      city: "Anytown",
      zipcode: "12345-6789",
      geo: {
        lat: "42.1234",
        lng: "-71.5678",
      },
    },
    phone: "(555) 555-1234",
    website: "www.liambrown.com",
    company: {
      name: "PQR Corporation",
      catchPhrase: "Innovative solutions for your business",
      bs: "Consulting",
    },
    userType: "student",
    studentDetails: {
      studentId: "S028",
      enrollmentDate: "2022-01-02",
      courses: ["Engineering", "Physics", "Calculus"],
      gradeLevel: "Junior",
      gpa: 3.5,
      gmail: "liambrown@gmail.com",
      socialMedia: {
        twitter: "@liambrown",
        instagram: "liambrown",
        linkedin: "/in/liam-brown"
      }
    }
  },
  {
    id: 29,
    firstname: "Jasmine",
    lastname: "Brown",
    email: "jasminebrown@example.com",
    birthDate: "1990-11-19",
    login: {
      uuid: "29aeed11-9430-4d68-901f-c0d4c1c3bf19",
      username: "jasminebrown",
      password: "jsonplaceholder.org",
      md5: "c1328472c5794a25723600f71c1b4586",
      sha1: "35544a31cc19bd6520af116554873167117f4d94",
      registered: "2021-11-02T07:00:59.390Z",
    },
    address: {
      street: "124 Elm Street",
      suite: "Apt. 110",
      city: "Anytown",
      zipcode: "12345-6789",
      geo: {
        lat: "42.1234",
        lng: "-71.5678",
      },
    },
    phone: "(555) 555-1234",
    website: "www.jasminebrown.com",
    company: {
      name: "A&B Technology",
      catchPhrase: "Innovative IT solutions for your business",
      bs: "Technology",
    },
    userType: "student",
    studentDetails: {
      studentId: "S029",
      enrollmentDate: "2021-11-02",
      courses: ["Software Engineering", "Web Development", "Database Systems"],
      gradeLevel: "Senior",
      gpa: 3.6,
      gmail: "jasminebrown@gmail.com",
      socialMedia: {
        twitter: "@jasminebrown",
        instagram: "jasminebrown",
        linkedin: "/in/jasmine-brown"
      }
    }
  },
  {
    id: 30,
    firstname: "Stefan",
    lastname: "Kupidura",
    email: "stefankupidura@example.com",
    birthDate: "1978-12-25",
    login: {
      uuid: "30aeed12-9430-4d68-901f-c0d4c1c3bf25",
      username: "stefankupidura",
      password: "jsonplaceholder.org",
      md5: "c1328472c5794a25723600f71c1b4586",
      sha1: "35544a31cc19bd6520af116554873167117f4d94",
      registered: "2021-12-01T07:51:59.390Z",
    },
    address: {
      street: "456 Cherry Street",
      suite: "Apt. 150",
      city: "Anytown",
      zipcode: "12345-6789",
      geo: {
        lat: "42.5678",
        lng: "-71.2345",
      },
    },
    phone: "(555) 555-1234",
    website: "www.stefankupidura.com",
    company: {
      name: "ABC Corporation",
      catchPhrase: "IT and Software solutions",
      bs: "Development",
    },
    userType: "tutor"
  },
];