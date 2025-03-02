"use client";

import { GoPencil } from "react-icons/go";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const PostCreateButton = () => {
	const router = useRouter();
	const createPost = api.post.createEmpty.useMutation();

	useEffect(() => {
		if (createPost.data) {
			router.push(`/posts/${createPost.data.id}/edit`);
		}
	}, [createPost.data, router]);

	return (
		<button
			type="button"
			className="btn btn-neutral btn-circle ml-auto"
			onClick={() => createPost.mutate()}
		>
			<GoPencil className="text-lg" />
		</button>
	);
};

export default PostCreateButton;
