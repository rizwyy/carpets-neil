import { createError } from "h3";
import { serverSupabaseClient } from "#supabase/server";
import { createClient } from "@supabase/supabase-js";

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event);

  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SERVICE_KEY
  );

  // Parse the ID from the request body
  const { id } = await readBody(event);
  console.log("ID to delete:", id);

  if (!id) {
    throw createError({
      statusCode: 400,
      message: "Bad Request: Missing log ID",
    });
  }

  // Delete the log entry with the specified ID
  const { data, error } = await supabase.from("logs").delete().eq("id", id);

  if (error) {
    throw createError({
      statusCode: 400,
      message: `Error deleting log: ${error.message}`,
    });
  }

  console.log("Log deleted successfully:", data);

  return { data };
});
