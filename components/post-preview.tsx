import { PostProps } from "@/types";
import Link from "next/link";

export default function PostPreview({ post }: { post: PostProps }) {
  return (
    <Link href={`/post/${post.id}`}>
      <div className="bg-sky-400 rounded-xl p-4 m-2 w-96">
        <h4 className="font-bold text-3xl">{post.title}</h4>
        <p>{post.upvotes - post.downvotes}</p>
      </div>
    </Link>
  );
}