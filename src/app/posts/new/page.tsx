"use client";
import Tiptap from "~/core/components/Tiptap";
import EmojiPicker from "emoji-picker-react";
import { GrEmoji } from "react-icons/gr";
import { useState } from "react";

const Page = () => {
	const [emoji, setEmoji] = useState("");
	const [showEmojiPicker, setShowEmojiPicker] = useState(false);

	return (
		<div className="liveletter-container">
			<div className="flex flex-col gap-8 pt-28">
				<div className="flex">
					<input
						type="text"
						className="input focus:outline-none border-none w-full text-xl"
						placeholder="Title"
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
										setEmoji(e.emoji) 
										setShowEmojiPicker(!showEmojiPicker);
									}}
								/>
							</div>
						)}
					</div>
				</div>

				<Tiptap />
			</div>
		</div>
	);
};

export default Page;
