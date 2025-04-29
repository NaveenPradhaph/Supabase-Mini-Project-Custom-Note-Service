import express from "express";
import { postNote } from "./functions/post_notes.js";
import { getNotes } from "./functions/get_notes.js";

const app = express();
app.use(express.json());

app.post("/notes", postNote);
app.get("/notes", getNotes);

app.listen(3000, () => console.log("Listening on http://localhost:3000"));
