import getCollection, { POSTS_COLLECTION } from "@/db";
import { ObjectId } from "mongodb";
import { PostProps } from "@/types";

export default async function getPostById(
  id: string,
): Promise<PostProps | null> {
  const postId = ObjectId.createFromHexString(id);
  
  const postsCollection = await getCollection(POSTS_COLLECTION);
  const data = await postsCollection.findOne({ _id: postId });
  
  if (data === null) {
    return null;
  }
  
  const post = {
    id: id,
    title: data.title,
    content: data.content,
    upvotes: data.upvotes,
    downvotes: data.downvotes,
  };
  
  return post;
}