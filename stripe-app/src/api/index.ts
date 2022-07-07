import { APIResponse, Note } from "../types";

const notes: Note[] = [{
  id: 1,
  agentId: "acc_",
  customerId: "cus_Lkx8AOzZ3js2N1",
  message: "Needs SSO auth integration",
  createdAt: new Date()
}, {
  id: 2,
  agentId: "acc_",
  customerId: "cus_LksZWRqAAxal22",
  message: "Call scheduled for Aug 5th",
  createdAt: new Date()
}]

const generateRandomId = (): number => {
  return Math.floor(Math.random() * 100);
}

export async function addNoteAPI({ customerId, message, user }: { customerId: string, message: string, user: string }): Promise<APIResponse> {
  const newNote: Note = { id: generateRandomId(), agentId: user, customerId, message, createdAt: new Date() }
  notes.push(newNote)

  const response: APIResponse = { error: false, data: {} }
  return Promise.resolve(response)
}

export async function getAllNotesAPI(): Promise<APIResponse> {
  const response: APIResponse = { error: false, data: { notes } }
  return Promise.resolve(response);
}

export async function getNotesForCustomerAPI({ customerId }: { customerId: string }): Promise<APIResponse> {
  const notesForCustomer = notes.filter((record: Note) => record.customerId === customerId)
  const response: APIResponse = { error: false, data: { notes: notesForCustomer } }

  return Promise.resolve(response);
}