import type { VideoData } from "shared/interfaces";

export interface SearchVideoItemProps {
	onPlay: () => void;

	videoData: VideoData;
	playing: boolean;
}
