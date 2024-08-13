import type { FC } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
// import { useUser, useVideos } from "entities/user";

import UserInfo from "./UserInfo";
import UserTabs from "./UserTabs";

const UserPage: FC = () => {
	const { uniqueId } = useParams();
	// const { data: user } = useUser(uniqueId as string);
	// const { data: videosData } = useVideos(uniqueId as string);

	const user = {
		user: {
			id: "107955",
			uniqueId: "tiktok",
			nickname: "TikTok",
			avatarThumb:
				"https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7310048624166535211~c5_100x100.jpeg?lk3s=a5d48078&nonce=80513&refresh_token=ff6a37869f6503674a8ea7d698edf030&x-expires=1723323600&x-signature=tVZUozt%2FFb5ZZFk8EJET4cqXN6Y%3D&shp=a5d48078&shcp=2472a6c6",
			avatarMedium:
				"https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/50a6164d020410283740c0b6e3a1cd95~c5_300x300.jpeg?lk3s=45126217&nonce=36668&refresh_token=89384d4539abd39eadd857504d85f846&x-expires=1723543200&x-signature=vejk%2BbMXZRqXf3uRabG7ax0D4BY%3D&shp=45126217&shcp=-",
			avatarLarger:
				"https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7310048624166535211~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=28151&refresh_token=cc1a52e51fb9954272f6aae682f26f25&x-expires=1723323600&x-signature=VjYB83DtV2yhbhCafShk9SCkh2Q%3D&shp=a5d48078&shcp=2472a6c6",
			signature: "WANNA MAKE A TIKTOK!?",
			verified: true,
			secUid: "MS4wLjABAAAAv7iSuuXDJGDvJkmH_vz1qkDZYo1apxgzaxdBSeIuPiM",
			secret: false,
			ftc: false,
			relation: 0,
			openFavorite: false,
			commentSetting: null,
			duetSetting: null,
			stitchSetting: null,
			privateAccount: false,
			isADVirtual: false,
			isUnderAge18: false,
			ins_id: "tiktok",
			twitter_id: "",
			youtube_channel_title: "TikTok",
			youtube_channel_id: "UChPd_WHrv3O-XAXXHLixs7g",
		},
		stats: {
			followingCount: 2,
			followerCount: 81417430,
			heartCount: 325949047,
			videoCount: 1037,
			diggCount: 0,
			heart: 325949047,
		},
	};

	const videosData = [
		{
			aweme_id: "v1c044g50000cq82fvvog65q09o84gm0666",
			video_id: "7390451064438377735",
			region: "JP",
			title: "#motorcycle #catdance #trendingvideo #cat",
			cover:
				"https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/os8fE4sAfBABKnAoqEi6DjNBWICAQChIICfbQi~c5_300x400.jpeg",
			ai_dynamic_cover:
				"https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/5ae0838d41f242648dbe24146f9fcb42_1720723489?lk3s=d05b14bd&nonce=49913&refresh_token=4bb5342572eb16827c065d6e234a6963&x-expires=1723150800&x-signature=tGuyDU7P0Kyn%2F434EhD3QvWSv1M%3D&s=AWEME_DETAIL&se=false&sh=&sc=dynamic_cover&l=20240807213454994B5DE04EB7BA0B4649&shp=d05b14bd&shcp=-",
			origin_cover:
				"https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/18ed99fd46534e9ab6cdc7cd95139ab3_1720723488~tplv-tiktokx-360p.jpeg",
			duration: 9,
			play: "https://v16m-default.akamaized.net/a5f66d74ca0a0d000d724fdcd11c0c34/66babb4c/video/tos/alisg/tos-alisg-pve-0037c001/oUIqIIAzTLcSTiRRydBB9wQCotAfATgQwEXDii/?a=0&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=4284&bt=2142&cs=0&ds=3&ft=XE5bCqT0m7jPD128in173wU8MYyKMeF~O5&mime_type=video_mp4&qs=0&rc=aDg6PDw0aTtoNDU6ZDtlNkBpamc0M2w5cjw3czMzODczNEAyL14zY18yXzQxNS4zLTBgYSNiMHJkMmRzZ2JgLS1kMS1zcw%3D%3D&vvpl=1&l=20240812194627CA581982D906232B69BA&btag=e00090000&shp=6da16bae&shcp=-",
			wmplay:
				"https://v16m-default.akamaized.net/34c175e9da57410fa793b55d0b2f8f71/66b43ce8/video/tos/alisg/tos-alisg-pve-0037c001/oYffZQCuENnYIAiWKCCiAI9BCpBsIEjQf64AQD/?a=0&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=2496&bt=1248&cs=0&ds=3&ft=XE5bCqT0m7jPD12lEb273wUPGIyKMeF~O5&mime_type=video_mp4&qs=0&rc=Zjw8ODRlOjM3OGZoZjZkZ0BpM2o7PHQ5cnk1dDMzODczNEA2MDQuY2FiNV8xMy42NDUvYSNqMWwtMmRzYzVgLS1kMWBzcw%3D%3D&vvpl=1&l=20240807213454994B5DE04EB7BA0B4649&btag=e00088000",
			music:
				"https://sf16-ies-music-sg.tiktokcdn.com/obj/tiktok-obj/7390451090238180112.mp3",
			music_info: {
				id: "7390451100971453201",
				title: "original sound - daikiti775",
				play: "https://sf16-ies-music-sg.tiktokcdn.com/obj/tiktok-obj/7390451090238180112.mp3",
				cover:
					"https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/6efb3319684989f40d4afb30571076ff.jpeg",
				author: "Daikiti",
				original: true,
				duration: 9,
				album: "",
			},
			play_count: 13472082,
			digg_count: 349829,
			size: null,
			wm_size: null,
			comment_count: 3686,
			share_count: 91021,
			download_count: 26377,
			create_time: 1720723483,
			anchors: null,
			anchors_extras: "",
			is_ad: false,
			commerce_info: {
				adv_promotable: false,
				auction_ad_invited: false,
				branded_content_type: 0,
				with_comment_filter_words: false,
			},
			commercial_video_info: "",
			item_comment_settings: 0,
			author: {
				id: "7375935816877671442",
				unique_id: "daikiti775",
				nickname: "Daikiti",
				avatar:
					"https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/14cb863e84e8fe687f797381e4e64166~c5_300x300.jpeg?lk3s=45126217&nonce=69191&refresh_token=a9da46350fb80f942a4d0483d530ebc8&x-expires=1723370400&x-signature=WvyO0FIvs8lHNT%2FZRifiIIt2C3I%3D&shp=45126217&shcp=-",
			},
			is_top: 0,
		},
		{
			aweme_id: "v1c044g50000cq82fvvo3454gm0666",
			video_id: "7390451064438377735",
			region: "JP",
			title: "#motorcycle #catdance #trendingvideo #cat",
			cover:
				"https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/os8fE4sAfBABKnAoqEi6DjNBWICAQChIICfbQi~c5_300x400.jpeg",
			ai_dynamic_cover:
				"https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/5ae0838d41f242648dbe24146f9fcb42_1720723489?lk3s=d05b14bd&nonce=49913&refresh_token=4bb5342572eb16827c065d6e234a6963&x-expires=1723150800&x-signature=tGuyDU7P0Kyn%2F434EhD3QvWSv1M%3D&s=AWEME_DETAIL&se=false&sh=&sc=dynamic_cover&l=20240807213454994B5DE04EB7BA0B4649&shp=d05b14bd&shcp=-",
			origin_cover:
				"https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/18ed99fd46534e9ab6cdc7cd95139ab3_1720723488~tplv-tiktokx-360p.jpeg",
			duration: 9,
			play: "https://v16m-default.akamaized.net/a5f66d74ca0a0d000d724fdcd11c0c34/66babb4c/video/tos/alisg/tos-alisg-pve-0037c001/oUIqIIAzTLcSTiRRydBB9wQCotAfATgQwEXDii/?a=0&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=4284&bt=2142&cs=0&ds=3&ft=XE5bCqT0m7jPD128in173wU8MYyKMeF~O5&mime_type=video_mp4&qs=0&rc=aDg6PDw0aTtoNDU6ZDtlNkBpamc0M2w5cjw3czMzODczNEAyL14zY18yXzQxNS4zLTBgYSNiMHJkMmRzZ2JgLS1kMS1zcw%3D%3D&vvpl=1&l=20240812194627CA581982D906232B69BA&btag=e00090000&shp=6da16bae&shcp=-",
			wmplay:
				"https://v16m-default.akamaized.net/34c175e9da57410fa793b55d0b2f8f71/66b43ce8/video/tos/alisg/tos-alisg-pve-0037c001/oYffZQCuENnYIAiWKCCiAI9BCpBsIEjQf64AQD/?a=0&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=2496&bt=1248&cs=0&ds=3&ft=XE5bCqT0m7jPD12lEb273wUPGIyKMeF~O5&mime_type=video_mp4&qs=0&rc=Zjw8ODRlOjM3OGZoZjZkZ0BpM2o7PHQ5cnk1dDMzODczNEA2MDQuY2FiNV8xMy42NDUvYSNqMWwtMmRzYzVgLS1kMWBzcw%3D%3D&vvpl=1&l=20240807213454994B5DE04EB7BA0B4649&btag=e00088000",
			music:
				"https://sf16-ies-music-sg.tiktokcdn.com/obj/tiktok-obj/7390451090238180112.mp3",
			music_info: {
				id: "7390451100971453201",
				title: "original sound - daikiti775",
				play: "https://sf16-ies-music-sg.tiktokcdn.com/obj/tiktok-obj/7390451090238180112.mp3",
				cover:
					"https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/6efb3319684989f40d4afb30571076ff.jpeg",
				author: "Daikiti",
				original: true,
				duration: 9,
				album: "",
			},
			play_count: 13472082,
			digg_count: 349829,
			size: null,
			wm_size: null,
			comment_count: 3686,
			share_count: 91021,
			download_count: 26377,
			create_time: 1720723483,
			anchors: null,
			anchors_extras: "",
			is_ad: false,
			commerce_info: {
				adv_promotable: false,
				auction_ad_invited: false,
				branded_content_type: 0,
				with_comment_filter_words: false,
			},
			commercial_video_info: "",
			item_comment_settings: 0,
			author: {
				id: "7375935816877671442",
				unique_id: "daikiti775",
				nickname: "Daikiti",
				avatar:
					"https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/14cb863e84e8fe687f797381e4e64166~c5_300x300.jpeg?lk3s=45126217&nonce=69191&refresh_token=a9da46350fb80f942a4d0483d530ebc8&x-expires=1723370400&x-signature=WvyO0FIvs8lHNT%2FZRifiIIt2C3I%3D&shp=45126217&shcp=-",
			},
			is_top: 0,
		},
		{
			aweme_id: "v1sdfsdfc044g50000cq82fvvog65q09o84gm0666",
			video_id: "7390451064438377735",
			region: "JP",
			title: "#motorcycle #catdance #trendingvideo #cat",
			cover:
				"https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/os8fE4sAfBABKnAoqEi6DjNBWICAQChIICfbQi~c5_300x400.jpeg",
			ai_dynamic_cover:
				"https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/5ae0838d41f242648dbe24146f9fcb42_1720723489?lk3s=d05b14bd&nonce=49913&refresh_token=4bb5342572eb16827c065d6e234a6963&x-expires=1723150800&x-signature=tGuyDU7P0Kyn%2F434EhD3QvWSv1M%3D&s=AWEME_DETAIL&se=false&sh=&sc=dynamic_cover&l=20240807213454994B5DE04EB7BA0B4649&shp=d05b14bd&shcp=-",
			origin_cover:
				"https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/18ed99fd46534e9ab6cdc7cd95139ab3_1720723488~tplv-tiktokx-360p.jpeg",
			duration: 9,
			play: "https://v16m-default.akamaized.net/a5f66d74ca0a0d000d724fdcd11c0c34/66babb4c/video/tos/alisg/tos-alisg-pve-0037c001/oUIqIIAzTLcSTiRRydBB9wQCotAfATgQwEXDii/?a=0&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=4284&bt=2142&cs=0&ds=3&ft=XE5bCqT0m7jPD128in173wU8MYyKMeF~O5&mime_type=video_mp4&qs=0&rc=aDg6PDw0aTtoNDU6ZDtlNkBpamc0M2w5cjw3czMzODczNEAyL14zY18yXzQxNS4zLTBgYSNiMHJkMmRzZ2JgLS1kMS1zcw%3D%3D&vvpl=1&l=20240812194627CA581982D906232B69BA&btag=e00090000&shp=6da16bae&shcp=-",
			wmplay:
				"https://v16m-default.akamaized.net/34c175e9da57410fa793b55d0b2f8f71/66b43ce8/video/tos/alisg/tos-alisg-pve-0037c001/oYffZQCuENnYIAiWKCCiAI9BCpBsIEjQf64AQD/?a=0&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=2496&bt=1248&cs=0&ds=3&ft=XE5bCqT0m7jPD12lEb273wUPGIyKMeF~O5&mime_type=video_mp4&qs=0&rc=Zjw8ODRlOjM3OGZoZjZkZ0BpM2o7PHQ5cnk1dDMzODczNEA2MDQuY2FiNV8xMy42NDUvYSNqMWwtMmRzYzVgLS1kMWBzcw%3D%3D&vvpl=1&l=20240807213454994B5DE04EB7BA0B4649&btag=e00088000",
			music:
				"https://sf16-ies-music-sg.tiktokcdn.com/obj/tiktok-obj/7390451090238180112.mp3",
			music_info: {
				id: "7390451100971453201",
				title: "original sound - daikiti775",
				play: "https://sf16-ies-music-sg.tiktokcdn.com/obj/tiktok-obj/7390451090238180112.mp3",
				cover:
					"https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/6efb3319684989f40d4afb30571076ff.jpeg",
				author: "Daikiti",
				original: true,
				duration: 9,
				album: "",
			},
			play_count: 13472082,
			digg_count: 349829,
			size: null,
			wm_size: null,
			comment_count: 3686,
			share_count: 91021,
			download_count: 26377,
			create_time: 1720723483,
			anchors: null,
			anchors_extras: "",
			is_ad: false,
			commerce_info: {
				adv_promotable: false,
				auction_ad_invited: false,
				branded_content_type: 0,
				with_comment_filter_words: false,
			},
			commercial_video_info: "",
			item_comment_settings: 0,
			author: {
				id: "7375935816877671442",
				unique_id: "daikiti775",
				nickname: "Daikiti",
				avatar:
					"https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/14cb863e84e8fe687f797381e4e64166~c5_300x300.jpeg?lk3s=45126217&nonce=69191&refresh_token=a9da46350fb80f942a4d0483d530ebc8&x-expires=1723370400&x-signature=WvyO0FIvs8lHNT%2FZRifiIIt2C3I%3D&shp=45126217&shcp=-",
			},
			is_top: 0,
		},
		{
			aweme_id: "v1c044gsdfsdf0000cq82fvvog65q09o84gm0666",
			video_id: "7390451064438377735",
			region: "JP",
			title: "#motorcycle #catdance #trendingvideo #cat",
			cover:
				"https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/os8fE4sAfBABKnAoqEi6DjNBWICAQChIICfbQi~c5_300x400.jpeg",
			ai_dynamic_cover:
				"https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/5ae0838d41f242648dbe24146f9fcb42_1720723489?lk3s=d05b14bd&nonce=49913&refresh_token=4bb5342572eb16827c065d6e234a6963&x-expires=1723150800&x-signature=tGuyDU7P0Kyn%2F434EhD3QvWSv1M%3D&s=AWEME_DETAIL&se=false&sh=&sc=dynamic_cover&l=20240807213454994B5DE04EB7BA0B4649&shp=d05b14bd&shcp=-",
			origin_cover:
				"https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/18ed99fd46534e9ab6cdc7cd95139ab3_1720723488~tplv-tiktokx-360p.jpeg",
			duration: 9,
			play: "https://v16m-default.akamaized.net/a5f66d74ca0a0d000d724fdcd11c0c34/66babb4c/video/tos/alisg/tos-alisg-pve-0037c001/oUIqIIAzTLcSTiRRydBB9wQCotAfATgQwEXDii/?a=0&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=4284&bt=2142&cs=0&ds=3&ft=XE5bCqT0m7jPD128in173wU8MYyKMeF~O5&mime_type=video_mp4&qs=0&rc=aDg6PDw0aTtoNDU6ZDtlNkBpamc0M2w5cjw3czMzODczNEAyL14zY18yXzQxNS4zLTBgYSNiMHJkMmRzZ2JgLS1kMS1zcw%3D%3D&vvpl=1&l=20240812194627CA581982D906232B69BA&btag=e00090000&shp=6da16bae&shcp=-",
			wmplay:
				"https://v16m-default.akamaized.net/34c175e9da57410fa793b55d0b2f8f71/66b43ce8/video/tos/alisg/tos-alisg-pve-0037c001/oYffZQCuENnYIAiWKCCiAI9BCpBsIEjQf64AQD/?a=0&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=2496&bt=1248&cs=0&ds=3&ft=XE5bCqT0m7jPD12lEb273wUPGIyKMeF~O5&mime_type=video_mp4&qs=0&rc=Zjw8ODRlOjM3OGZoZjZkZ0BpM2o7PHQ5cnk1dDMzODczNEA2MDQuY2FiNV8xMy42NDUvYSNqMWwtMmRzYzVgLS1kMWBzcw%3D%3D&vvpl=1&l=20240807213454994B5DE04EB7BA0B4649&btag=e00088000",
			music:
				"https://sf16-ies-music-sg.tiktokcdn.com/obj/tiktok-obj/7390451090238180112.mp3",
			music_info: {
				id: "7390451100971453201",
				title: "original sound - daikiti775",
				play: "https://sf16-ies-music-sg.tiktokcdn.com/obj/tiktok-obj/7390451090238180112.mp3",
				cover:
					"https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/6efb3319684989f40d4afb30571076ff.jpeg",
				author: "Daikiti",
				original: true,
				duration: 9,
				album: "",
			},
			play_count: 13472082,
			digg_count: 349829,
			size: null,
			wm_size: null,
			comment_count: 3686,
			share_count: 91021,
			download_count: 26377,
			create_time: 1720723483,
			anchors: null,
			anchors_extras: "",
			is_ad: false,
			commerce_info: {
				adv_promotable: false,
				auction_ad_invited: false,
				branded_content_type: 0,
				with_comment_filter_words: false,
			},
			commercial_video_info: "",
			item_comment_settings: 0,
			author: {
				id: "7375935816877671442",
				unique_id: "daikiti775",
				nickname: "Daikiti",
				avatar:
					"https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/14cb863e84e8fe687f797381e4e64166~c5_300x300.jpeg?lk3s=45126217&nonce=69191&refresh_token=a9da46350fb80f942a4d0483d530ebc8&x-expires=1723370400&x-signature=WvyO0FIvs8lHNT%2FZRifiIIt2C3I%3D&shp=45126217&shcp=-",
			},
			is_top: 0,
		},
		{
			aweme_id: "v1c044g50000cq82fsdf65q09o84gm0666",
			video_id: "7390451064438377735",
			region: "JP",
			title: "#motorcycle #catdance #trendingvideo #cat",
			cover:
				"https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/os8fE4sAfBABKnAoqEi6DjNBWICAQChIICfbQi~c5_300x400.jpeg",
			ai_dynamic_cover:
				"https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/5ae0838d41f242648dbe24146f9fcb42_1720723489?lk3s=d05b14bd&nonce=49913&refresh_token=4bb5342572eb16827c065d6e234a6963&x-expires=1723150800&x-signature=tGuyDU7P0Kyn%2F434EhD3QvWSv1M%3D&s=AWEME_DETAIL&se=false&sh=&sc=dynamic_cover&l=20240807213454994B5DE04EB7BA0B4649&shp=d05b14bd&shcp=-",
			origin_cover:
				"https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/18ed99fd46534e9ab6cdc7cd95139ab3_1720723488~tplv-tiktokx-360p.jpeg",
			duration: 9,
			play: "https://v16m-default.akamaized.net/a5f66d74ca0a0d000d724fdcd11c0c34/66babb4c/video/tos/alisg/tos-alisg-pve-0037c001/oUIqIIAzTLcSTiRRydBB9wQCotAfATgQwEXDii/?a=0&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=4284&bt=2142&cs=0&ds=3&ft=XE5bCqT0m7jPD128in173wU8MYyKMeF~O5&mime_type=video_mp4&qs=0&rc=aDg6PDw0aTtoNDU6ZDtlNkBpamc0M2w5cjw3czMzODczNEAyL14zY18yXzQxNS4zLTBgYSNiMHJkMmRzZ2JgLS1kMS1zcw%3D%3D&vvpl=1&l=20240812194627CA581982D906232B69BA&btag=e00090000&shp=6da16bae&shcp=-",
			wmplay:
				"https://v16m-default.akamaized.net/34c175e9da57410fa793b55d0b2f8f71/66b43ce8/video/tos/alisg/tos-alisg-pve-0037c001/oYffZQCuENnYIAiWKCCiAI9BCpBsIEjQf64AQD/?a=0&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=2496&bt=1248&cs=0&ds=3&ft=XE5bCqT0m7jPD12lEb273wUPGIyKMeF~O5&mime_type=video_mp4&qs=0&rc=Zjw8ODRlOjM3OGZoZjZkZ0BpM2o7PHQ5cnk1dDMzODczNEA2MDQuY2FiNV8xMy42NDUvYSNqMWwtMmRzYzVgLS1kMWBzcw%3D%3D&vvpl=1&l=20240807213454994B5DE04EB7BA0B4649&btag=e00088000",
			music:
				"https://sf16-ies-music-sg.tiktokcdn.com/obj/tiktok-obj/7390451090238180112.mp3",
			music_info: {
				id: "7390451100971453201",
				title: "original sound - daikiti775",
				play: "https://sf16-ies-music-sg.tiktokcdn.com/obj/tiktok-obj/7390451090238180112.mp3",
				cover:
					"https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/6efb3319684989f40d4afb30571076ff.jpeg",
				author: "Daikiti",
				original: true,
				duration: 9,
				album: "",
			},
			play_count: 13472082,
			digg_count: 349829,
			size: null,
			wm_size: null,
			comment_count: 3686,
			share_count: 91021,
			download_count: 26377,
			create_time: 1720723483,
			anchors: null,
			anchors_extras: "",
			is_ad: false,
			commerce_info: {
				adv_promotable: false,
				auction_ad_invited: false,
				branded_content_type: 0,
				with_comment_filter_words: false,
			},
			commercial_video_info: "",
			item_comment_settings: 0,
			author: {
				id: "7375935816877671442",
				unique_id: "daikiti775",
				nickname: "Daikiti",
				avatar:
					"https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/14cb863e84e8fe687f797381e4e64166~c5_300x300.jpeg?lk3s=45126217&nonce=69191&refresh_token=a9da46350fb80f942a4d0483d530ebc8&x-expires=1723370400&x-signature=WvyO0FIvs8lHNT%2FZRifiIIt2C3I%3D&shp=45126217&shcp=-",
			},
			is_top: 0,
		},
		{
			aweme_id: "v1c044g50000c2fvvog65q09o84gm0666",
			video_id: "7390451064438377735",
			region: "JP",
			title: "#motorcycle #catdance #trendingvideo #cat",
			cover:
				"https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/os8fE4sAfBABKnAoqEi6DjNBWICAQChIICfbQi~c5_300x400.jpeg",
			ai_dynamic_cover:
				"https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/5ae0838d41f242648dbe24146f9fcb42_1720723489?lk3s=d05b14bd&nonce=49913&refresh_token=4bb5342572eb16827c065d6e234a6963&x-expires=1723150800&x-signature=tGuyDU7P0Kyn%2F434EhD3QvWSv1M%3D&s=AWEME_DETAIL&se=false&sh=&sc=dynamic_cover&l=20240807213454994B5DE04EB7BA0B4649&shp=d05b14bd&shcp=-",
			origin_cover:
				"https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/18ed99fd46534e9ab6cdc7cd95139ab3_1720723488~tplv-tiktokx-360p.jpeg",
			duration: 9,
			play: "https://v16m-default.akamaized.net/a5f66d74ca0a0d000d724fdcd11c0c34/66babb4c/video/tos/alisg/tos-alisg-pve-0037c001/oUIqIIAzTLcSTiRRydBB9wQCotAfATgQwEXDii/?a=0&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=4284&bt=2142&cs=0&ds=3&ft=XE5bCqT0m7jPD128in173wU8MYyKMeF~O5&mime_type=video_mp4&qs=0&rc=aDg6PDw0aTtoNDU6ZDtlNkBpamc0M2w5cjw3czMzODczNEAyL14zY18yXzQxNS4zLTBgYSNiMHJkMmRzZ2JgLS1kMS1zcw%3D%3D&vvpl=1&l=20240812194627CA581982D906232B69BA&btag=e00090000&shp=6da16bae&shcp=-",
			wmplay:
				"https://v16m-default.akamaized.net/34c175e9da57410fa793b55d0b2f8f71/66b43ce8/video/tos/alisg/tos-alisg-pve-0037c001/oYffZQCuENnYIAiWKCCiAI9BCpBsIEjQf64AQD/?a=0&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=2496&bt=1248&cs=0&ds=3&ft=XE5bCqT0m7jPD12lEb273wUPGIyKMeF~O5&mime_type=video_mp4&qs=0&rc=Zjw8ODRlOjM3OGZoZjZkZ0BpM2o7PHQ5cnk1dDMzODczNEA2MDQuY2FiNV8xMy42NDUvYSNqMWwtMmRzYzVgLS1kMWBzcw%3D%3D&vvpl=1&l=20240807213454994B5DE04EB7BA0B4649&btag=e00088000",
			music:
				"https://sf16-ies-music-sg.tiktokcdn.com/obj/tiktok-obj/7390451090238180112.mp3",
			music_info: {
				id: "7390451100971453201",
				title: "original sound - daikiti775",
				play: "https://sf16-ies-music-sg.tiktokcdn.com/obj/tiktok-obj/7390451090238180112.mp3",
				cover:
					"https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/6efb3319684989f40d4afb30571076ff.jpeg",
				author: "Daikiti",
				original: true,
				duration: 9,
				album: "",
			},
			play_count: 13472082,
			digg_count: 349829,
			size: null,
			wm_size: null,
			comment_count: 3686,
			share_count: 91021,
			download_count: 26377,
			create_time: 1720723483,
			anchors: null,
			anchors_extras: "",
			is_ad: false,
			commerce_info: {
				adv_promotable: false,
				auction_ad_invited: false,
				branded_content_type: 0,
				with_comment_filter_words: false,
			},
			commercial_video_info: "",
			item_comment_settings: 0,
			author: {
				id: "7375935816877671442",
				unique_id: "daikiti775",
				nickname: "Daikiti",
				avatar:
					"https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/14cb863e84e8fe687f797381e4e64166~c5_300x300.jpeg?lk3s=45126217&nonce=69191&refresh_token=a9da46350fb80f942a4d0483d530ebc8&x-expires=1723370400&x-signature=WvyO0FIvs8lHNT%2FZRifiIIt2C3I%3D&shp=45126217&shcp=-",
			},
			is_top: 0,
		},
	];

	return (
		<>
			<Helmet>
				<title>{uniqueId}</title>
			</Helmet>
			<main className="w-full h-full overflow-y-auto">
				<section className="min-h-full w-full p-9 flex flex-col gap-5 overflow-y-auto">
					{user ? (
						<>
							<UserInfo
								user={user.user}
								followingCount={user.stats.followingCount}
								followerCount={user.stats.followerCount}
								heartCount={user.stats.heartCount}
								videoCount={user.stats.videoCount}
							/>
							<UserTabs user={user.user} videosData={videosData} />
						</>
					) : null}
				</section>
			</main>
		</>
	);
};

export default UserPage;
