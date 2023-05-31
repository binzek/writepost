// Appwrite API configurations

import { Client, Account } from "appwrite";

export const client = new Client();
export const account = new Account(client);

client
  .setEndpoint(process.env.NEXT_PUBLIC_API_ENDPOINT || "")
  .setProject(process.env.NEXT_PUBLIC_PROJECT_ID || "");
