import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export async function postNote(req, res) {
  const { user_id, title, content, label, reminder_time, collaborators } =
    req.body;

  const { data, error } = await supabase.from("notes").insert([
    {
      user_id,
      title,
      content,
      label,
      reminder_time,
      collaborators,
    },
  ]);

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
}
