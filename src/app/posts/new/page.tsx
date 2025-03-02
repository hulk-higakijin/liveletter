import Tiptap from "~/core/components/Tiptap";

const Page = () => {
	return (
		<div className="liveletter-container">
			<div className="flex flex-col gap-8 pt-28">
				<input
					type="text"
					className="input focus:outline-none border-none w-full text-xl"
					placeholder="Title"
				/>

				<Tiptap />
			</div>
		</div>
	);
};

export default Page;
