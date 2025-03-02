import Navbar from "~/core/components/Navbar";
import { api } from "~/trpc/server";
import Image from "next/image";
import Layout from "~/app/layout";
import UserAvatar from "~/users/components/UserAvatar";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params;
	const { user } = await api.user.findOne({ id });

	if (!user) {
		return <p>No user</p>;
	}

	return (
		<Layout>
			<div className="liveletter-container">
				<div className="flex gap-2 my-4">
					<UserAvatar thumbnailUrl={user.image} />
					<span className="my-auto">{user.name}</span>
				</div>

				<div role="tablist" className="tabs tabs-bordered border-primary">
					<a role="tab" className="tab">
						すべて
					</a>
					<a role="tab" className="tab tab-active">
						日記
					</a>
					<a role="tab" className="tab">
						メモ
					</a>
				</div>

			</div>
		</Layout>
	);
};

export default Page;
