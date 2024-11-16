"use server";
import getCollection, { POSTS_COLLECTION } from "@/db";
import { PostProps } from "@/types";

export default async function createNewPost(
  title: string,
  content: string,
): Promise<PostProps | null> {
  const p = {
    title: title,
    content: content,
    upvotes: 0,
    downvotes: 0,
  };

  const postsCollection = await getCollection(POSTS_COLLECTION);
  const res = await postsCollection.insertOne(p);

  if (!res.acknowledged) {
    return null;
  }

  let post;
  try {
    post = {
      ...p,
      id: res.insertedId.toHexString(),
    };
    // @ts-expect-error remove _id
    delete post._id;

    return post;
  } catch {
    return null;
  }
}
