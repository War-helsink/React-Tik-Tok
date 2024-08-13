import type { UserData, User } from "entities/user";
import type { VideoData } from "shared/interfaces";

export interface UserProps {
	user: User;
}

export interface UserInfoProps {
	user: UserData;
	followingCount: number;
	followerCount: number;
	heartCount: number;
	videoCount: number;
}

export interface UserTabsProps {
	user: UserData;
}

export interface UserLikedProps {
	uniqueId: string;
}

export interface UserVideoProps {
	onPlay: () => void;

	videoData: VideoData;
	playing: boolean;
}
