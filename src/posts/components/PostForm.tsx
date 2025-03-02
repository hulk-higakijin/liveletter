"use client";

import EmojiPicker from "emoji-picker-react";
import { GrEmoji } from "react-icons/gr";
import { useEffect, useState } from "react";
import Tiptap from "~/core/components/Tiptap";
import type { Post } from "@prisma/client";

const PostForm = (post: Post) => {
	const [title, setTitle] = useState(post.name );
	const [emoji, setEmoji] = useState(post.emoji);
	const [content, setContent] = useState("");
	const [showEmojiPicker, setShowEmojiPicker] = useState(false);

	useEffect(() => {
		if (title && emoji) {
			console.log("Title: ", title);
			console.log("Emoji: ", emoji);
		}
	}, [title, emoji]);

	return (
		<div className="flex flex-col gap-8 pt-28">
			<div className="flex">
				<input
					type="text"
					className="input focus:outline-none border-none w-full text-xl"
					placeholder="Title"
					onChange={(e) => setTitle(e.target.value)}
          defaultValue={title}
				/>

				<div className="relative flex">
					<button
						type="button"
						className="my-auto"
						onClick={() => {
							setShowEmojiPicker(!showEmojiPicker);
						}}
					>
						{emoji ? <span>{emoji}</span> : <GrEmoji className="text-2xl" />}
					</button>
					{showEmojiPicker && (
						<div className="absolute top-10 right-0">
							<EmojiPicker
								onEmojiClick={(e) => {
									setEmoji(e.emoji);
									setShowEmojiPicker(!showEmojiPicker);
								}}
							/>
						</div>
					)}
				</div>
			</div>
			<Tiptap />
		</div>
	);
};

export default PostForm;
