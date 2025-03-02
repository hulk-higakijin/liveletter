"use client";
import type { Post } from "@prisma/client";
import { TypeAnimation } from "react-type-animation";

const PostContentAnimation = ({ name }: Post) => {
	return (
		<div className="text-2xl">
			<TypeAnimation
				sequence={[
					name,
					() => {
						console.log("Sequence completed");
					},
				]}
				wrapper="span"
				cursor={true}
			/>
		</div>
	);
};

export default PostContentAnimation;
