import type { User, UserStats, DataVideo } from "entities/tik-tok";

export interface UserProps {
	user: User;
	stats: UserStats;
}

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

	videoData: DataVideo;
	playing: boolean;
}
