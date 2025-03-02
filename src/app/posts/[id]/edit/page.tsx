import PostForm from "~/posts/components/PostForm";
import { api } from "~/trpc/server";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params;
	const { post } = await api.post.findOne({ id });

  console.log(post)

	return (
		<div className="liveletter-container">
			<PostForm {...post} />
		</div>
	);
};

export default Page;
