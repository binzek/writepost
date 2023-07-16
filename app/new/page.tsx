"use client";

// Library imports
import { FC, FormEvent, useContext, useState } from "react";
import { redirect } from "next/navigation";
import { ID } from "appwrite";

// Local imports
import { UserContext } from "../layout";
import { databases, account } from "@/api/appwrite";

const NewPage: FC = () => {
  // Get user's status
  const { user } = useContext(UserContext);

  const [content, setContent] = useState("");

  const createNewBlog = () => {
    account
      .get()
      .then((user) => {
        databases.createDocument(
          "writepost-db",
          "blogs-collection",
          ID.unique(),
          {
            user_id: user.$id,
            content: content,
            title: content,
          }
        );
      })
      .then(() => console.log("Document created!"))
      .catch((err) => console.error(err));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createNewBlog();
  };

  if (user) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Blog Content</span>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  } else {
    redirect("/signin");
  }
};

export default NewPage;
