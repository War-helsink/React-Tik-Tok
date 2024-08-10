import type { User, UserStats, DataVideo } from "entities/tik-tok";

export interface TikTokUserProps {
	user: User;
	stats: UserStats;
}

export interface TikTokUserTabsProps {
	user: User;
}

export interface TikTokUserVideosProps {
	hidden: boolean;
}

export interface TikTokUserVideoProps {
	onPlay: () => void;

	videoData: DataVideo;
	playing: boolean;
}
