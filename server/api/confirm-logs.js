import { createError } from "h3";
import { serverSupabaseClient } from "#supabase/server";
import { createClient } from "@supabase/supabase-js";

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event);

  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SERVICE_KEY
  );

  // Parse user data from the request body
  const { phone, name, email, preference } = await readBody(event);
  console.log(phone, name, email, preference);

  if (!phone) {
    throw createError({
      statusCode: 400,
      message: "Bad Request: Missing phone number",
    });
  }

  // First, check if there are rows with the phone number and isOrderConfirmed is false
  const { data: existingData, error: selectError } = await supabase
    .from("logs")
    .select("id")
    .eq("phone", phone)
    .eq("isOrderConfirmed", false);

  if (selectError || existingData.length === 0) {
    throw createError({
      statusCode: 400,
      message: "No logs found with the given phone number that are unconfirmed",
    });
  }

  // Build the update object dynamically, only including fields that are present
  const updateData = {};
  if (name) updateData.name = name;
  if (email) updateData.email = email;
  if (preference) updateData.preference = preference;
  updateData.isOrderConfirmed = true; // Set isOrderConfirmed to true

  // Update all logs with the specified phone number and isOrderConfirmed set to false
  const { data, error } = await supabase
    .from("logs")
    .update(updateData)
    .eq("phone", phone)
    .eq("isOrderConfirmed", false);

  if (error) {
    throw createError({
      statusCode: 400,
      message: `Error updating logs: ${error.message}`,
    });
  }

  console.log("Logs updated successfully:", data);

  return { data };
});
