import type { VideoData } from "shared/interfaces";

export interface VideosProps {
	videosData: VideoData[];
}

export interface VideoItemProps {
	playing?: boolean;
	videoData: VideoData;
}

export interface VideoActionContainerProps {
	avatarUrl: string;
	uniqueId: string;

	diggCount: number;
	commentCount: number
	downloadCount: number;
	shareCount: number;
}

export interface VideoDetailsProps {
	url: string;
	playing?: boolean;
	videoData: VideoData;
}