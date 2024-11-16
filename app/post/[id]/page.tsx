import FullPost from "@/components/full-post";
import getPostById from "@/lib/getPostById";

export default async function FullPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  
  const post = await getPostById(id);
  
  if (post === null) {
    return <p>Post not found</p>;
  }
  
  return <FullPost post={post} />;
}