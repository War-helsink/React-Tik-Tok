import type { FeedVideoData } from "entities/feed";

export interface FeedItemProps {
	videoData: FeedVideoData;
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
	videoData: FeedVideoData;
}
