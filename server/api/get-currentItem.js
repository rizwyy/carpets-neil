import { createError } from "h3";
import { serverSupabaseClient } from "#supabase/server";
import { createClient } from "@supabase/supabase-js";

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event);

  // Initialize the Supabase client
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SERVICE_KEY
  );

  // Get the ID from the request query
  const { id } = getQuery(event);
  console.log(id);
  if (!id) {
    throw createError({
      statusCode: 400,
      message: "Bad Request: Missing log ID",
    });
  }

  // Fetch the log entry by its ID from the logs table
  const { data, error } = await supabase
    .from("logs")
    .select("id, preference, isOrderConfirmed, phone") // You can adjust the fields as needed
    .eq("id", id);

  if (error) {
    throw createError({
      statusCode: 400,
      message: `Error fetching log: ${error.message}`,
    });
  }

  if (!data || data.length === 0) {
    throw createError({
      statusCode: 404,
      message: "No log found for the provided ID",
    });
  }

  console.log("Log retrieved successfully:", data);

  return { data };
});
