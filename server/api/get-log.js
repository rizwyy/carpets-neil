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

  // Get the mobile number from the request query
  const { mobile } = getQuery(event);

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
    .eq("phone", mobile);

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
