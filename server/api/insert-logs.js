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
    .from("tokens")
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
  const { name, phone, email, preference, isOrderConfirmed } = await readBody(
    event
  );
  console.log(name, phone, email, preference, isOrderConfirmed);

  // Build the insert object dynamically, only including fields that are present
  const insertData = {};
  if (name) insertData.name = name;
  if (phone) insertData.phone = phone;
  if (email) insertData.email = email;
  if (preference) insertData.preference = preference;
  insertData.isOrderConfirmed = isOrderConfirmed ?? null; // Default to null if not provided

  if (Object.keys(insertData).length === 0) {
    throw createError({
      statusCode: 400,
      message: "Bad Request: No valid fields to insert",
    });
  }

  // Insert user data into logs table and return the id
  const { data, error } = await supabase
    .from("logs")
    .insert([insertData])
    .select("id") // Select the id of the newly inserted row
    .single(); // Ensure we get the inserted row as a single object

  if (error) {
    throw createError({
      statusCode: 400,
      message: `Error inserting logs: ${error.message}`,
    });
  }

  // Store the id in userStore.userData.id
  const insertedId = data.id;
  console.log("Log inserted successfully with id:", insertedId);

  return { id: insertedId };
});
