import { Prisma } from ".prisma/client";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import { createNote, getAllNotes, getNotesByCustomerId } from "./services";

const app = express();

app.use(helmet());
app.use(cors());
cors({ credentials: true, origin: true })

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ "message": "hello world" })
})

app.post("/note", async (req, res) => {
  const { agentId, customerId, message } = req.body;

  const newNote: Prisma.NoteUncheckedCreateInput = { agentId, customerId, message }

  const savedNote = await createNote(newNote);
  res.json({ error: false, data: savedNote })

})

app.get("/notes", async (req, res) => {
  const allNotes = await getAllNotes();
  res.json({ error: false, data: allNotes })
})

app.get("/notes/:customerId", async (req, res) => {
  const customerId = req.params.customerId;

  const allNotes = await getNotesByCustomerId(customerId);
  res.json({ error: false, data: allNotes })
})

export default app;
