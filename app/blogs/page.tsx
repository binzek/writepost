"use client";

// Library imports
import { FC, useEffect, useState } from "react";
import { Poppins, Raleway } from "next/font/google";

// Local imports
import { databases } from "@/api/appwrite";
import BlogCard from "@/components/BlogCard";

// Blogs page Props
interface Blogs {
  title: string;
  user_name: string;
  content: string;
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

const BlogsPage: FC = () => {
  // State for blogs
  const [blogs, setBlogs] = useState<Array<Blogs>>([]);

  // List all datas on load
  useEffect(() => {
    databases.listDocuments("writepost-db", "blogs-collection").then((res) =>
      res.documents.forEach((doc) =>
        setBlogs((prevState) => [
          ...prevState,
          {
            title: doc.title,
            user_name: doc.user_name,
            content: doc.content,
            date: doc.$createdAt,
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
        Explore Blogs
      </h1>
      <div className="my-5 columns-1 gap-2 md:columns-2 lg:columns-3">
        {blogs.map((blog) => (
          <BlogCard
            title={blog.title}
            user_name={blog.user_name}
            content={blog.content}
            date={blog.date}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
