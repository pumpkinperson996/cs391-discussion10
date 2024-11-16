import DisplayAllPosts from "@/components/display-all-posts";
import getAllPosts from "@/lib/getAllPosts";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div className="flex flex-col items-center bg-blue-200 p-4">
      <DisplayAllPosts inputPosts={posts} />
    </div>
  );
}
