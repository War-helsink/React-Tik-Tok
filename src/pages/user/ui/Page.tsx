import type { FC } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import User from "./User";

const UserPage: FC = () => {
	const { uniqueId } = useParams();

	return (
		<>
			<Helmet>
				<title>{uniqueId}</title>
			</Helmet>
			<main className="w-full h-full overflow-y-auto">
				<User />
			</main>
		</>
	);
};

export default UserPage;
