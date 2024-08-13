import type { VideoData } from "shared/interfaces";

export interface SearchVideosProps {
	videosData: VideoData[];
}

export interface SearchVideoItemProps {
	onPlay: () => void;

	videoData: VideoData;
	playing: boolean;
}
