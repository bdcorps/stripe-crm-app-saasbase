import { Note } from "../types";


const notes: Note[] = [{ id: 1, agentId: "acc_", customerId: "cus_Lkx8AOzZ3js2N1", message: "this is a message", createdAt: new Date() }]


export async function addNoteAPI({ customerId, message, user }: any) {
  const newNote: Note = { id: 2, agentId: user, customerId, message, createdAt: new Date() }

  notes.push(newNote)
}

export async function getAllNotesAPI() {
  return Promise.resolve(notes);
}

export async function getNotesForCustomerAPI({ customerId }: any) {
  const result = notes.filter((record: any) => record.user === customerId)
  return Promise.resolve(result);
}