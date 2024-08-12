import type { Response, VideoData } from "shared/interfaces";

export interface UserVideosParams {
	uniqueId: string;
	userId: string;
	count?: number;
	cursor?: number;
}

export interface UserVideosResponse extends Response {
	data: UserVideosData;
}

export interface UserVideosData {
	videos: VideoData[];
	cursor: string;
	hasMore: boolean;
}
