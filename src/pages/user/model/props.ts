import type { UserData } from "entities/user";
import type { VideoData } from "shared/interfaces";

export interface UserInfoProps {
	user: UserData;
	followingCount: number;
	followerCount: number;
	heartCount: number;
	videoCount: number;
}

export interface UserTabsProps {
	isLoading?: boolean;
	user: UserData;
	videosData: VideoData[];
}

export interface UserLikedProps {
	uniqueId: string;
}

export interface UserVideosProps {
	videosData: VideoData[];
}

export interface UserVideoProps {
	onPlay: () => void;

	videoData: VideoData;
	playing: boolean;
}
