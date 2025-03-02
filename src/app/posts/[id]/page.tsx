import Link from "next/link";
import Layout from "~/app/layout";

const Page = () => {
	return (
		<Layout>
			<div className="relative">
				<Link href={"/"}>
					<div className="absolute p-6">←</div>
				</Link>
				<div className="liveletter-container">
					<div className="pt-16 md:pt-28">
						<p>create super future</p>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Page;
