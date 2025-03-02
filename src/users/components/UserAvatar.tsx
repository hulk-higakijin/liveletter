import Image from "next/image";

const UserAvatar = ({ thumbnailUrl }: { thumbnailUrl: string | null }) => {
	return (
		<div className="avatar">
			<div className="w-12 rounded-full">
				<Image
					src={thumbnailUrl || ""}
					width={100}
					height={100}
					alt="User icon"
					className="avatar"
				/>
			</div>
		</div>
	);
};

export default UserAvatar;
