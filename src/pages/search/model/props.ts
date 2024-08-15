import type { VideoData } from "shared/interfaces";

export interface SearchVideosProps {
	hasMore: boolean;
	loadNextPage: () => void;
	videosData: VideoData[];
}

export interface SearchVideoItemProps {
	onPlay: () => void;

	videoData: VideoData;
	playing: boolean;
}
