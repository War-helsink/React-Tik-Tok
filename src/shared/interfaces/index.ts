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
