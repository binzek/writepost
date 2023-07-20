"use client";

// Library imports
import { FC, useEffect, useState } from "react";
import { Poppins, Raleway } from "next/font/google";

// Local imports
import { databases } from "@/api/appwrite";
import StoryCard from "@/components/StoryCard";

// Stories type
interface Stories {
  id: string;
  title: string;
  publisher: string;
  uid: string;
  body: string;
  date: string;
}

// Fonts initialization
const poppins = Poppins({
  subsets: ["latin", "devanagari", "latin-ext"],
  weight: ["400", "500", "600"],
});
const raleway = Raleway({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext", "vietnamese"],
  weight: "700",
});

const StoriesPage: FC = () => {
  // State for all stories
  const [stories, setStories] = useState<Array<Stories>>([]);

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
              uid: story.uid,
              body: story.body,
              date: story.$createdAt,
            },
          ])
        )
      );
  }, []);

  return (
    <div
      className={`${poppins.className} mx-auto -mt-8 w-11/12 overflow-y-scroll md:w-3/4 lg:w-2/3`}
    >
      <h1 className={`${raleway.className} text-center text-2xl`}>
        Explore Short Stories & Insights
      </h1>
      <div className="my-5 columns-1 gap-3 md:columns-2 lg:columns-3">
        {stories.reverse().map((story) => (
          <StoryCard
            key={story.id}
            title={story.title}
            publisher={story.publisher}
            uid={story.uid}
            body={story.body}
            date={story.date}
          />
        ))}
      </div>
    </div>
  );
};

export default StoriesPage;
