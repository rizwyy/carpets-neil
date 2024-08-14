import { randomBytes } from "crypto";
import { defineEventHandler, createError } from "h3";

export default defineEventHandler(async (event) => {
  try {
    // Generate a secure token
    const token = randomBytes(32).toString("hex"); // 64-character hexadecimal string

    // Return the generated token
    return { token };
  } catch (err) {
    console.error("Error generating token:", err);
    throw createError({ statusCode: 500, message: "Internal Server Error" });
  }
});
