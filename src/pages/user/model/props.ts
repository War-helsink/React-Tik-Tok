import type { User } from "entities/user";
import type { UserVideoData } from "entities/user-videos";

export interface UserInfoProps {
	user: User;
	followingCount: number;
	followerCount: number;
	heartCount: number;
	videoCount: number;
}

export interface UserTabsProps {
	user: User;
}

export interface UserVideosProps {
	hidden: boolean;
}

export interface UserLikedProps {
	hidden: boolean;
	uniqueId: string;
}

export interface UserVideoProps {
	onPlay: () => void;

	videoData: UserVideoData;
	playing: boolean;
}
