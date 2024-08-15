export { type Volume, createVolume, isVolumeInRange} from "./volume";

export type SkeletonType = "item" | "itemV2" | "itemV3";
export type DirectionType = "grid" | "row" | "column";

export interface Response {
	code: number;
	msg: string;
	processed_time: number;
}

export interface Author {
	id: string;
	unique_id: string;
	nickname: string;
	avatar: string;
}

export interface CommerceInfo {
	adv_promotable: boolean;
	auction_ad_invited: boolean;
	branded_content_type: number;
	with_comment_filter_words: boolean;
}

export interface MusicInfo {
	id: string;
	title: string;
	play: string;
	cover: string;
	author: string;
	original: boolean;
	duration: number;
	album: string;
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
	size?: null | number;
	wm_size?: null | number;
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
