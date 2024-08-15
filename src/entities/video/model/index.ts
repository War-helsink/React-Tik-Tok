import type { Response, VideoData } from "shared/interfaces";

export interface VideoParams {
	videoId?: string;
	uniqueId?: string
}

export interface VideoResponse extends Response {
	data: VideoData;
}
