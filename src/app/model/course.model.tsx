export const courseModel = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "title",
        "description",
        "instructor",
        "duration",
        "category",
        "level",
        "language",
        "price",
      ],
      properties: {
        title: {
          bsonType: "string",
          description: "Title must be a string and is required",
        },
        description: {
          bsonType: "string",
          description: "Description must be a string and is required",
        },
        instructor: {
          bsonType: "string",
          description: "instructor is required!",
        },
        duration: {
          bsonType: "string",
          description: "pls specify the duration for this course",
        },
        category: {
          bysonType: "string",
          description: "pls include categories!",
        },
        level: {
          bsonType: "string",
          description: "Pls insert the levels for this course",
        },
        language: {
          bsonType: "string",
          description: "pls provide the language used for the course",
        },
        price: {
          bsonType: "string",
          description: "enter amount for the course",
        },
      },
    },
  },
  validationLevel: "strict", // Enforces validation on all inserts and updates
  validationAction: "error", // Rejects documents that fail validation
};
