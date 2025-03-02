import { api } from "~/trpc/server";
import Layout from "~/app/layout";
import UserAvatar from "~/users/components/UserAvatar";
import PostCard from "~/posts/components/PostCard";
import { GoPencil } from "react-icons/go";
import Link from "next/link";
import { auth } from "~/server/auth";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params;
	const { user } = await api.user.findOne({ id });
	const { posts } = await api.post.whereByUserId({ id: user?.id ?? "" });
	const session = await auth();
	const isMyPage = session?.user?.id === user?.id;

	if (!user) {
		return <p>No user</p>;
	}

	return (
		<Layout>
			<div className="liveletter-container">
				<div className="flex gap-2 my-4">
					<UserAvatar thumbnailUrl={user.image} />
					<span className="my-auto">{user.name}</span>
					{isMyPage && (
						<Link
							href={"/posts/new"}
							className="btn btn-neutral btn-circle ml-auto"
						>
							<GoPencil className="text-lg" />
						</Link>
					)}
				</div>

				<div role="tablist" className="tabs tabs-bordered border-primary">
					{/* <a role="tab" className="tab"> */}
					{/* 	すべて */}
					{/* </a> */}
					{/* <a role="tab" className="tab tab-active"> */}
					{/* 	日記 */}
					{/* </a> */}
					{/* <a role="tab" className="tab"> */}
					{/* 	メモ */}
					{/* </a> */}
				</div>

				<div className="grid md:grid-cols-3 gap-x-4 gap-y-10 my-10">
					{posts.map((post) => (
						<PostCard key={post.id} {...post} />
					))}
				</div>
			</div>
		</Layout>
	);
};

export default Page;
