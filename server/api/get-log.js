import { createError } from "h3";
import { serverSupabaseClient } from "#supabase/server";
import { createClient } from "@supabase/supabase-js";

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event);

  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SERVICE_KEY
  );

  // Get the mobile number from the request query
  const { mobile } = getQuery(event);
  console.log(mobile);
  if (!mobile) {
    throw createError({
      statusCode: 400,
      message: "Bad Request: Missing mobile number",
    });
  }

  // Fetch associated preferences from the logs table
  const { data, error } = await supabase
    .from("logs")
    .select("id, preference, isOrderConfirmed")
    .eq("phone", mobile)
    .eq("isOrderConfirmed", false);

  if (error) {
    throw createError({
      statusCode: 400,
      message: `Error fetching logs: ${error.message}`,
    });
  }

  if (!data || data.length === 0) {
    throw createError({
      statusCode: 404,
      message: "No logs found for the provided mobile number",
    });
  }

  console.log("Logs retrieved successfully:", data);

  return { data };
});
