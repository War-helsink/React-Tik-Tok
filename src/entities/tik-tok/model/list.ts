import type { TikTokResponse, MusicInfo, CommerceInfo, Author } from "./base";

export interface TikTokListParams {
	count?: number;
}

export interface TikTokListResponse extends TikTokResponse {
	data: VideoData[];
}

export interface VideoData {
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
