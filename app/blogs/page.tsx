"use client";

// Library imports
import { FC, useEffect, useState } from "react";

import { databases } from "@/api/appwrite";

interface Blogs {
  title: string;
  user_name: string;
  content: string;
}

const BlogsPage: FC = () => {
  const [blogs, setBlogs] = useState<Array<Blogs>>([]);

  useEffect(() => {
    databases.listDocuments("writepost-db", "blogs-collection").then((res) =>
      res.documents.forEach((doc) =>
        setBlogs((prevState) => [
          ...prevState,
          {
            title: doc.title,
            user_name: doc.user_name,
            content: doc.content,
          },
        ])
      )
    );
  }, []);

  return (
    <div>
      {blogs.map((blog) => (
        <div>
          <h1>{blog.title}</h1>
          <p>{blog.user_name}</p>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogsPage;
