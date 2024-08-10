import type { TikTokResponse } from "./base";

export interface TikTokUserParams {
	uniqueId: string;
}

export interface TikTokUserResponse extends TikTokResponse {
	data: DataUser;
}

export interface DataUser {
	user: User;
	stats: UserStats;
}

export interface User {
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
