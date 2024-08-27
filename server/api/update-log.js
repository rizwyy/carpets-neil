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
  const { id, name, phone, email, preference, isOrderConfirmed } =
    await readBody(event);
  console.log(id, name, phone, email, preference, isOrderConfirmed);

  if (!id) {
    throw createError({
      statusCode: 400,
      message: "Bad Request: Missing log ID",
    });
  }

  // Build the update object dynamically, only including fields that are present
  const updateData = {};
  if (name) updateData.name = name;
  if (phone) updateData.phone = phone;
  if (email) updateData.email = email;
  if (preference) updateData.preference = preference;
  updateData.isOrderConfirmed = isOrderConfirmed ?? null; // Default to null if not provided

  if (Object.keys(updateData).length === 0) {
    throw createError({
      statusCode: 400,
      message: "Bad Request: No valid fields to update",
    });
  }

  // Update the logs table
  const { data, error } = await supabase
    .from("logs")
    .update(updateData)
    .eq("id", id);

  if (error) {
    throw createError({
      statusCode: 400,
      message: `Error updating logs: ${error.message}`,
    });
  }

  console.log("Log updated successfully:", data);

  return { data };
});
