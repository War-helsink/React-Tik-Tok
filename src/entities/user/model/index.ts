import type { Response, VideoData } from "shared/interfaces";

export interface UserParams {
	uniqueId: string;
}

export interface UserVideosParams {
	uniqueId: string;
	userId?: string;
	count?: number;
	cursor?: number;
}

export interface UserResponse extends Response {
	data: UserInfo;
}

export interface UserVideosResponse extends Response {
	data: UserVideosData;
}

export interface UserVideosData {
	videos: VideoData[];
	cursor: number;
	hasMore: boolean;
}


export interface UserInfo {
	user: UserData;
	stats: UserStats;
}

export interface UserData {
	id: string;
	uniqueId: string;
	nickname: string;
	avatarThumb: string;
	avatarMedium: string;
	avatarLarger: string;
	signature: string;
	verified: boolean;
	secUid: string;
	secret: boolean;
	ftc: boolean;
	relation: number;
	openFavorite: boolean;
	commentSetting: string | null;
	duetSetting: string | null;
	stitchSetting: string | null;
	privateAccount: boolean;
	isADVirtual: boolean;
	isUnderAge18: boolean;
	ins_id: string;
	twitter_id: string;
	youtube_channel_title: string;
	youtube_channel_id: string;
}

export interface UserStats {
	followingCount: number;
	followerCount: number;
	heartCount: number;
	videoCount: number;
	diggCount: number;
	heart: number;
}
