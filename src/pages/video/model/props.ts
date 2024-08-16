import type { VideoData, Comment } from "shared/interfaces";

export interface SingleVideoProps {
	videoData: VideoData;
}

export interface VideoCommentsDetailsProps {
	videoData: VideoData;
	comments: Comment[];
}

export interface VideoCommentsProps {
	comments: Comment[];
}

export interface VideoCommentItemProps {
	comment: Comment;
}

export interface AuthorInfoProps {
	videoData: VideoData;
}
