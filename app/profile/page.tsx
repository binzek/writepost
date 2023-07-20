"use client";

// Library imports
import { FC, useContext, useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { Raleway, Poppins } from "next/font/google";

// Local imports
import { UserContext } from "../layout";
import { account } from "@/api/appwrite";
import ProfileCard from "@/components/ProfileCard";
import { databases } from "@/api/appwrite";
import StoryCard from "@/components/StoryCard";

// Fonts initialization
const poppins = Poppins({
  subsets: ["latin", "devanagari", "latin-ext"],
  weight: ["300", "400", "500"],
});
const raleway = Raleway({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext", "vietnamese"],
  weight: "700",
});

// Stories type
interface Stories {
  id: string;
  title: string;
  publisher: string;
  body: string;
  date: string;
}

const ProfilePage: FC = () => {
  // Get user's status
  const { user } = useContext(UserContext);

  // State for storing user's details
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
  });
  // State for all stories
  const [stories, setStories] = useState<Array<Stories>>([]);

  // Function to sign out current user
  const signOut = () => {
    confirm("Are you sure to sign out from WRITEPOST?") &&
      account
        .deleteSessions()
        .then(() => {
          window.location.href = "/";
        })
        .catch((error) => console.error(error));
  };

  if (user) {
    // Get user's data on page mount and store it to state
    useEffect(() => {
      account
        .get()
        .then((response) =>
          setUserDetails({ name: response.name, email: response.email })
        )
        .catch((error) => console.error(error));
    }, []);

    // Fetch all stories on database on page mount
    useEffect(() => {
      databases
        .listDocuments("writepost-db", "stories-collection")
        .then((response) =>
          response.documents.forEach((story) =>
            setStories((prevState) => [
              ...prevState,
              {
                id: story.$id,
                title: story.title,
                publisher: story.publisher,
                body: story.body,
                date: story.$createdAt,
              },
            ])
          )
        );
    }, []);

    return (
      <div
        className={`${poppins.className} mx-auto -mt-8 w-11/12 md:w-3/4 lg:w-2/3`}
      >
        <ProfileCard
          name={userDetails.name}
          email={userDetails.email}
          signOutFn={signOut}
        />
        <div>
          <h1 className={`${raleway.className} text-center text-2xl`}>
            Your Publishings
          </h1>
          <div className="my-5 columns-1 gap-3 md:columns-2 lg:columns-3">
            {stories.reverse().map((story) => (
              <StoryCard
                key={story.id}
                title={story.title}
                publisher={story.publisher}
                body={story.body}
                date={story.date}
              />
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    redirect("/signin");
  }
};

export default ProfilePage;
