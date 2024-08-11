import type { VideoData } from "entities/tik-tok";

export interface FeedItemProps {
	videoData: VideoData;
}

export interface FeedActionContainerProps {
	avatarUrl: string;
	uniqueId: string;

	diggCount: number;
	commentCount: number
	downloadCount: number;
	shareCount: number;
}

export interface FeedVideoProps {
	url: string;
	playing?: boolean;
	videoData: VideoData;
}
