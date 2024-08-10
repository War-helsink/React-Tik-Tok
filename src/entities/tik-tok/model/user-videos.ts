import type { TikTokResponse, MusicInfo, CommerceInfo, Author } from "./base";

export interface TikTokUserVideosParams {
	uniqueId: string;
	userId: string;
	count?: number;
	cursor?: number;
}

export interface TikTokUserVideosResponse extends TikTokResponse {
	data: DataUserVideos;
}

export interface DataUserVideos {
	videos: DataVideo[];
	cursor: string;
	hasMore: boolean;
}

export interface DataVideo {
	aweme_id: string;
	video_id: string;
	region: string;
	title: string;
	cover: string;
	ai_dynamic_cover: string;
	origin_cover: string;
	duration: number;
	play: string;
	wmplay: string;

	size: null | number;
	wm_size: null | number;

	music: string;
	music_info: MusicInfo;

	play_count: number;
	digg_count: number;

	comment_count: number;
	share_count: number;
	download_count: number;
	create_time: number;

	
	anchors: null | string;
	anchors_extras: string;
	is_ad: boolean;
	commerce_info: CommerceInfo;
	commercial_video_info: string;
	item_comment_settings: number;
	author: Author;
	is_top: number;
}
