import type { Response, Comment } from "shared/interfaces";

export interface CommentByVideoParams {
	videoId?: string;
	uniqueId?: string;
	count?: number;
	cursor?: number;
}

export interface CommentByVideoResponse extends Response {
	data: CommentByVideoData;
}

export interface CommentByVideoData {
	comments: Comment[];
	total: number;
	cursor: number;
	hasMore: boolean;
}
