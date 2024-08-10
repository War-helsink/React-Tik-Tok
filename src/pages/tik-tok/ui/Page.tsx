import type { FC } from "react";
import { Helmet } from "react-helmet-async";

import Feed from "./Feed";

const TikTokPage: FC = () => {
	return (
		<>
			<Helmet>
				<title>Tik Tok</title>
			</Helmet>
			<main className="w-full h-full">
				<Feed />
			</main>
		</>
	);
};

export default TikTokPage;
