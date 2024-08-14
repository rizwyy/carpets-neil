import { randomBytes } from "crypto";
import { getCookie } from "#imports";
import { setCookie } from "#imports";
import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  let mySecureCookie = getCookie(event, "mySecureCookie");

  const token = randomBytes(32).toString("hex"); // 64-character hexadecimal string
  setCookie(event, "mySecureCookie", token);

  const client = await serverSupabaseClient(event);
  try {
    // Insert the token into the Supabase table
    const { data, error } = await client.from("tokens").insert([{ token }]);

    if (error) {
      throw createError({ statusCode: 500, message: "Error storing token" });
    }

    return "SUCCESS";
  } catch (err) {
    console.error("Error generating token:", err);
    throw createError({ statusCode: 500, message: "Internal Server Error" });
  }
});
