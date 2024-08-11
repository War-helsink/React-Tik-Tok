import { type FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { IonText } from "@ionic/react";

import type { UserVideosData } from "entities/user-videos";
import type { UserVideosProps } from "../../model/props";

import UserVideo from "../UserVideo";

const UserVideos: FC<UserVideosProps> = ({ hidden }) => {
	const { t } = useTranslation();

	const dataVideo: UserVideosData = {
		videos: [
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
				play: "https://v16m-default.akamaized.net/e1cca07baaa5ecc93ede9d27d8d58c48/66b8de69/video/tos/alisg/tos-alisg-pve-0037c001/oQOGLCVd8IicmNXLIQJNIeeHg5lXMEAS2DejA8/?a=0&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=7656&bt=3828&cs=0&ds=3&ft=XE5bCqT0m7jPD12TLL173wUPGIyKMeF~O5&mime_type=video_mp4&qs=0&rc=O2lmOjc4aDpkZDk6PGZpM0BpM21vb3I5cnJ4czMzODczNEBhYjEtMDY1NmAxNF5iLS8yYSNjcjFnMmRzMjJgLS1kMS1zcw%3D%3D&vvpl=1&l=2024081109525226209811B948C9D3EAE5&btag=e00088000&shp=6da16bae&shcp=-",
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
				play: "https://v16m-default.akamaized.net/e1cca07baaa5ecc93ede9d27d8d58c48/66b8de69/video/tos/alisg/tos-alisg-pve-0037c001/oQOGLCVd8IicmNXLIQJNIeeHg5lXMEAS2DejA8/?a=0&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=7656&bt=3828&cs=0&ds=3&ft=XE5bCqT0m7jPD12TLL173wUPGIyKMeF~O5&mime_type=video_mp4&qs=0&rc=O2lmOjc4aDpkZDk6PGZpM0BpM21vb3I5cnJ4czMzODczNEBhYjEtMDY1NmAxNF5iLS8yYSNjcjFnMmRzMjJgLS1kMS1zcw%3D%3D&vvpl=1&l=2024081109525226209811B948C9D3EAE5&btag=e00088000&shp=6da16bae&shcp=-",
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
				play: "https://v16m-default.akamaized.net/e1cca07baaa5ecc93ede9d27d8d58c48/66b8de69/video/tos/alisg/tos-alisg-pve-0037c001/oQOGLCVd8IicmNXLIQJNIeeHg5lXMEAS2DejA8/?a=0&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=7656&bt=3828&cs=0&ds=3&ft=XE5bCqT0m7jPD12TLL173wUPGIyKMeF~O5&mime_type=video_mp4&qs=0&rc=O2lmOjc4aDpkZDk6PGZpM0BpM21vb3I5cnJ4czMzODczNEBhYjEtMDY1NmAxNF5iLS8yYSNjcjFnMmRzMjJgLS1kMS1zcw%3D%3D&vvpl=1&l=2024081109525226209811B948C9D3EAE5&btag=e00088000&shp=6da16bae&shcp=-",
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
				play: "https://v16m-default.akamaized.net/e1cca07baaa5ecc93ede9d27d8d58c48/66b8de69/video/tos/alisg/tos-alisg-pve-0037c001/oQOGLCVd8IicmNXLIQJNIeeHg5lXMEAS2DejA8/?a=0&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=7656&bt=3828&cs=0&ds=3&ft=XE5bCqT0m7jPD12TLL173wUPGIyKMeF~O5&mime_type=video_mp4&qs=0&rc=O2lmOjc4aDpkZDk6PGZpM0BpM21vb3I5cnJ4czMzODczNEBhYjEtMDY1NmAxNF5iLS8yYSNjcjFnMmRzMjJgLS1kMS1zcw%3D%3D&vvpl=1&l=2024081109525226209811B948C9D3EAE5&btag=e00088000&shp=6da16bae&shcp=-",
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
				play: "https://v16m-default.akamaized.net/e1cca07baaa5ecc93ede9d27d8d58c48/66b8de69/video/tos/alisg/tos-alisg-pve-0037c001/oQOGLCVd8IicmNXLIQJNIeeHg5lXMEAS2DejA8/?a=0&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=7656&bt=3828&cs=0&ds=3&ft=XE5bCqT0m7jPD12TLL173wUPGIyKMeF~O5&mime_type=video_mp4&qs=0&rc=O2lmOjc4aDpkZDk6PGZpM0BpM21vb3I5cnJ4czMzODczNEBhYjEtMDY1NmAxNF5iLS8yYSNjcjFnMmRzMjJgLS1kMS1zcw%3D%3D&vvpl=1&l=2024081109525226209811B948C9D3EAE5&btag=e00088000&shp=6da16bae&shcp=-",
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
				play: "https://v16m-default.akamaized.net/e1cca07baaa5ecc93ede9d27d8d58c48/66b8de69/video/tos/alisg/tos-alisg-pve-0037c001/oQOGLCVd8IicmNXLIQJNIeeHg5lXMEAS2DejA8/?a=0&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=7656&bt=3828&cs=0&ds=3&ft=XE5bCqT0m7jPD12TLL173wUPGIyKMeF~O5&mime_type=video_mp4&qs=0&rc=O2lmOjc4aDpkZDk6PGZpM0BpM21vb3I5cnJ4czMzODczNEBhYjEtMDY1NmAxNF5iLS8yYSNjcjFnMmRzMjJgLS1kMS1zcw%3D%3D&vvpl=1&l=2024081109525226209811B948C9D3EAE5&btag=e00088000&shp=6da16bae&shcp=-",
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
		],
		cursor: "1722680100000",
		hasMore: true,
	};

	const [active, setActive] = useState(0);

	return dataVideo.videos.length ? (
		<div
			className={`${hidden ? "hidden" : "grid"} min-h-full  grid-cols-auto-fit-minmax w-full gap-x-4 gap-y-6`}
		>
			{dataVideo.videos.map((videoData, index) => (
				<UserVideo
					key={videoData.aweme_id}
					playing={active === index}
					videoData={videoData}
					onPlay={() => setActive(index)}
				/>
			))}
		</div>
	) : (
		<div
			className={`${hidden ? "hidden" : "flex"} w-full h-full flex-col justify-center items-center flex-grow p-5`}
		>
			<IonText className="text-3xl">{t("userVideos.noVideos")}</IonText>
			<p className="opacity-50">{t("userVideos.hidden")}</p>
		</div>
	);
};

export default UserVideos;
