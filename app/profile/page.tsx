"use client";

// Library imports
import { FC, useContext, useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { Raleway, Poppins } from "next/font/google";

// Local imports
import { account } from "@/api/appwrite";
import ProfileCard from "@/components/ProfileCard";
import { databases } from "@/api/appwrite";
import StoryCard from "@/components/StoryCard";
import { AuthContext } from "@/context/AuthContext";

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
  uid: string;
  date: string;
}

const ProfilePage: FC = () => {
  // Get user's status
  const isUser = useContext(AuthContext);

  if (isUser) {
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
          .catch((error) => alert(error.message));
    };

    // Function to delete a story
    const deleteStory = (storyId: string, userId: string) => {
      account
        .get()
        .then((user) => {
          if (user.$id === userId) {
            confirm("Are you sure to delete this story?") &&
              databases
                .deleteDocument("writepost-db", "stories-collection", storyId)
                .then(() => {
                  alert("Story deleted succesfully");
                  window.location.reload();
                })
                .catch((error) => alert(error.message));
          }
        })
        .catch((error) => alert(error.message));
    };

    // Get user's data on page mount and store it to state
    useEffect(() => {
      account
        .get()
        .then((user) => {
          setUserDetails({ name: user.name, email: user.email });

          // Get all documents that it's uid matched with current user
          databases
            .listDocuments("writepost-db", "stories-collection")
            .then((response) =>
              response.documents.forEach((story) => {
                if (story.uid === user.$id) {
                  setStories((prevState) => [
                    ...prevState,
                    {
                      id: story.$id,
                      title: story.title,
                      publisher: story.publisher,
                      uid: story.uid,
                      body: story.body,
                      date: story.$createdAt,
                    },
                  ]);
                }
              })
            )
            .catch((error) => alert(error.message));
        })
        .catch((error) => console.error(error));
    }, []);

    useEffect(() => {
      document.title = userDetails.name + " • WRITEPOST";
    }, [userDetails.name]);

    return (
      <div
        className={`${poppins.className} mx-auto my-1 w-11/12 flex-1 md:w-3/4 lg:w-2/3`}
      >
        <ProfileCard
          name={userDetails.name}
          email={userDetails.email}
          signOutFn={signOut}
        />
        <div className="mt-3 md:mt-4">
          <h1 className={`${raleway.className} text-center text-2xl`}>
            Your Publishings
          </h1>
          {stories.length < 1 ? (
            <h2 className="mt-4 text-center text-lg">
              You haven't published anything yet.
            </h2>
          ) : (
            <div className="mt-2 columns-1 gap-3 md:columns-2 lg:columns-3">
              {stories.reverse().map((story) => (
                <StoryCard
                  key={story.id}
                  title={story.title}
                  publisher={story.publisher}
                  uid={story.uid}
                  body={story.body}
                  date={story.date}
                  deleteFn={() => deleteStory(story.id, story.uid)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  } else {
    redirect("/signin");
  }
};

export default ProfilePage;
