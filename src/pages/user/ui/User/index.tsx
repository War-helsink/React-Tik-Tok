import type { FC } from "react";

import UserInfo from "../UserInfo";
import UserTabs from "../UserTabs";

import type { UserProps } from "../../model/props";

const User: FC<UserProps> = ({ user }) => {
	return (
		<section className="min-h-full w-full p-9 flex flex-col gap-5 overflow-y-auto">
			<UserInfo
				user={user.user}
				followingCount={user.stats.followingCount}
				followerCount={user.stats.followerCount}
				heartCount={user.stats.heartCount}
				videoCount={user.stats.videoCount}
			/>
			<UserTabs user={user.user} />
		</section>
	);
};

export default User;
