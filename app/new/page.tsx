"use client";

// Library imports
import { FC, FormEvent, useContext, useState } from "react";
import { redirect } from "next/navigation";
import { ID } from "appwrite";
import { Poppins, Raleway } from "next/font/google";

// Local imports
import { UserContext } from "../layout";
import { databases, account } from "@/api/appwrite";
import NewForm from "@/components/NewForm";

// Fonts initialization
const poppins = Poppins({
  subsets: ["latin", "devanagari", "latin-ext"],
  weight: ["300", "400", "500"],
});
const raleway = Raleway({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext", "vietnamese"],
  weight: "700",
});

const NewPage: FC = () => {
  // Get user's status
  const { user } = useContext(UserContext);

  // Form states
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Function to create new post on database
  const createNewBlog = () => {
    account
      .get()
      .then((user) => {
        databases.createDocument(
          "writepost-db",
          "blogs-collection",
          ID.unique(),
          {
            user_name: user.name,
            title,
            content,
          }
        );
      })
      .then((res) => {
        console.log(res);
        setTitle("");
        setContent("");
      })
      .catch((err) => console.error(err));
  };

  // Function to handle create form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createNewBlog();
  };

  if (user) {
    return (
      <div
        className={`${poppins.className} mx-auto -mt-8 flex w-5/6 flex-col items-center md:w-2/3 lg:w-1/2`}
      >
        <h1 className={`${raleway.className} text-center text-2xl`}>
          Create New Blog Post
        </h1>
        <NewForm
          title={title}
          content={content}
          setTitle={setTitle}
          setContent={setContent}
          handleSubmit={handleSubmit}
        />
      </div>
    );
  } else {
    redirect("/signin");
  }
};

export default NewPage;
