import Link from "next/link";
import Layout from "~/app/layout";
import { api } from "~/trpc/server";
import PostContentAnimation from "~/posts/components/PostContentAnimation";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params;
	const { post } = await api.post.findOne({ id });
	const { user } = await api.user.findOne({ id: post?.createdById || "" });

	if (!post || !user) {
		return <div>Post not found</div>;
	}

	return (
		<Layout>
			<div className="relative">
				<Link href={"/"}>
					<div className="absolute p-6">←</div>
				</Link>
				<div className="liveletter-container">
					<div className="pt-16 md:pt-28 flex flex-col gap-4 max-w-2xl">
						<p className="text-7xl mx-auto">{post.emoji}</p>
						<PostContentAnimation {...post} />
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Page;
