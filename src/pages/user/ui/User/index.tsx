import type { FC } from "react";

import UserInfo from "../UserInfo";
import UserTabs from "../UserTabs";
import type { UserProps } from "../../model/props";

const User: FC<UserProps> = ({ user, stats }) => {
	return (
		<section className="min-h-full w-full p-9 flex flex-col gap-5 overflow-y-auto">
			<UserInfo
				user={user}
				followingCount={stats.followingCount}
				followerCount={stats.followerCount}
				heartCount={stats.heartCount}
				videoCount={stats.videoCount}
			/>
			<UserTabs user={user} />
		</section>
	);
};

export default User;
