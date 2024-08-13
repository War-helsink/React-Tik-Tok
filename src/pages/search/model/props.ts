import type { VideoData } from "shared/interfaces";

export interface SearchVideosProps {
	hasMore: boolean;
	videosData: VideoData[];
}

export interface SearchVideoItemProps {
	onPlay: () => void;

	videoData: VideoData;
	playing: boolean;
}
