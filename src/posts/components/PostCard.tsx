import type { Post } from "@prisma/client";
import { format } from "date-fns/format";
import Link from "next/link";

const PostCard = ({ id, emoji, name, createdAt }: Post) => {
	return (
		<Link href={`/posts/${id}`}>
			<div className="card bg-base-100 shadow-sm">
				<figure className="bg-blue-100 h-32 rounded-lg text-4xl">
					{emoji}
				</figure>
				<div className="card-body p-2">
					<h2>{name}</h2>
					<p className="text-sm">{format(new Date(createdAt), "yyyy/MM/dd")}</p>
				</div>
			</div>
		</Link>
	);
};

export default PostCard;
