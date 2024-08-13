import type { Response, VideoData } from "shared/interfaces";

export interface FeedParams {
	count?: number;
}

export interface FeedSearchParams {
	cursor?: number;
	count?: number;
	keywords: string;
	sortType?: number;
	publishTime?: number;
}

export interface FeedListResponse extends Response {
	data: VideoData[];
}

export interface FeedSearchResponse extends Response {
	data: FeedSearchData;
}

export interface FeedSearchData {
	videos: VideoData[];
	cursor: number;
	hasMore: boolean;
}
