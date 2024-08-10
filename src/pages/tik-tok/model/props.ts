import type { VideoData } from "entities/tik-tok";

export interface FeedItemProps {
	videoData: VideoData;
}

export interface VideoProps {
	url: string;
	videoId: string;
	playing?: boolean;
	videoData: VideoData;
}
