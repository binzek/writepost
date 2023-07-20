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

  // State for story title
  const [title, setTitle] = useState("");
  // State for story body
  const [body, setBody] = useState("");

  // Function to create new story into database
  const postNewStory = () => {
    confirm("Are you sure to post the story?") &&
      account
        .get()
        .then((user) => {
          databases.createDocument(
            "writepost-db",
            "stories-collection",
            ID.unique(),
            {
              publisher: user.name,
              title,
              body,
              uid: user.$id,
            }
          );
        })
        .then(() => {
          alert("Your story has been posted!");
          setTitle("");
          setBody("");
        })
        .catch((error) => console.error(error));
  };

  // Function to handle new story form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postNewStory();
  };

  if (user) {
    return (
      <div
        className={`${poppins.className} mx-auto -mt-8 flex w-5/6 flex-col items-center md:w-2/3 lg:w-1/2`}
      >
        <h1 className={`${raleway.className} text-center text-2xl`}>
          Write a New Short Story / Insight
        </h1>
        <NewForm
          title={title}
          body={body}
          setTitle={setTitle}
          setBody={setBody}
          handleSubmit={handleSubmit}
        />
      </div>
    );
  } else {
    redirect("/signin");
  }
};

export default NewPage;