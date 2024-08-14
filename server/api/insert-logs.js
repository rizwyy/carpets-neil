import { getCookie } from "h3";
import { createError } from "h3";
import { serverSupabaseClient } from "#supabase/server";
import { createClient } from "@supabase/supabase-js";
export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event);
  const cookieToken = getCookie(event, "mySecureCookie");

  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SERVICE_KEY
  );

  // Validate the token against stored tokens
  const { data: session, error: selectError } = await client
    .from("tokens") // Replace with your tokens table name
    .select("created_at")
    .eq("token", cookieToken)
    .single();

  if (selectError || !session) {
    throw createError({
      statusCode: 403,
      message: "Forbidden: Invalid cookie token",
    });
  }

  // Parse user data from the request body
  const { name, phone, email } = await readBody(event);
  console.log(name, phone, email);
  if (!name || !phone || !email) {
    throw createError({
      statusCode: 400,
      message: "Bad Request: Missing name, phone, or email",
    });
  }

  // Insert user data into logs table
  const { data, error } = await supabase
    .from("logs")
    .insert([{ name, phone, email }]);

  if (data) {
    console.log(data);
  }
  if (error) {
    throw createError({ statusCode: 400, message: `::${error.message}` });
  }

  return { data };
});
