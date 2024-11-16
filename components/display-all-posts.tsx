"use client";
import createNewPost from "@/lib/createNewPost";
import { PostProps } from "@/types";
import { useState } from "react";
import NewPost from "./new-post";
import PostPreview from "./post-preview";

export default function DisplayAllPosts({
  inputPosts,
}: {
  inputPosts: PostProps[];
}) {
  const [posts, setPosts] = useState(inputPosts);

  async function addNewPost(title: string, content: string) {
    const p = await createNewPost(title, content);
    if (p === null) {
      return false;
    }

    setPosts([p, ...posts]);
    return true;
  }

  return (
    <div className="flex flex-col items-center">
      <NewPost createFunc={addNewPost} />
      {posts.map((p, i) => (
        <PostPreview key={i + p.title} post={p} />
      ))}
    </div>
  );
}
