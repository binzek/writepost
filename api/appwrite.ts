// Appwrite API configurations

import { Client, Account, Databases } from "appwrite";

export const client = new Client();
export const account = new Account(client);
export const databases = new Databases(client);

client
  .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT || "")
  .setProject(process.env.NEXT_PUBLIC_PROJECT || "");
