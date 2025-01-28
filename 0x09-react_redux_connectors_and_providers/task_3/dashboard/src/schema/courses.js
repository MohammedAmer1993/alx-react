import { schema, normalize } from "normalizr";

// Define course schema
const courseSchema = new schema.Entity("courses");

export const coursesNormalizer = (data) => {
  return normalize(data, [courseSchema]);
};
