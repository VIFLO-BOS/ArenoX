import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "this field is required!"],
    minLength: 0,
    maxLength: 30,
    trim: true,
    validate: {
      validator: (value) => {
        const nameRegex = /^[a-zA-Z\s]+$/;
        return nameRegex.test(value);
      },
    },
  },

  middleName: {
    type: String,
    required: [false, "optional"],
    minLength: 0,
    maxLength: 30,
    trim: true,
    validate: {
      validator: (value) => {
        const nameRegex = /^[a-zA-Z\s]+$/;
        return nameRegex.test(value);
      },
    },
  },

  lastName: {
    type: String,
    required: [true, "this field is required!"],
    minLength: 0,
    maxLength: 30,
    trim: true,
    validate: {
      validator: (value) => {
        const nameRegex = /^[a-zA-Z\s]+$/;
        return nameRegex.test(value);
      },
    },
  },

  phoneNumber: {
    type: Number,
    required: [true, "this field is required!"],
    minLength: 0,
    maxLength: 11,
    trim: true,
  },

  email: {
    type: String,
    unique: true,
    required: [true, "this field is required!"],
  },

  profileImage: {
    type: String,
  },

  password: {
    type: String,
    required: [true, "this is required!"],
  },

  dateOfbirth: {
    type: String,
  },
  role: {
    type: String,
    enum: ["admin", "student", "instructor"],
    default: "admin",
  },

  status: { type: String, enum: ["active", "inactive"], default: "active" },

  permission: {
    manageUsers: { type: Boolean, default: true },
    manageCourses: { type: Boolean, default: true },
    managePayments: { type: Boolean, default: true },
    viewReport: { type: Boolean, default: true },
  },
  
  lastLogin: Date,

  createdAt: {
    type: Date,
  },
});

export type AdminDocument = mongoose.InferSchemaType<typeof adminSchema> &
  mongoose.Document;
export default mongoose.model<AdminDocument>("adminSchema", adminSchema);
