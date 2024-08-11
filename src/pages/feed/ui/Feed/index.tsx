import type { FC } from "react";

// import { useGetListQuery } from "entities/tik-tok";
import type { FeedVideoData } from "entities/feed";
import FeedItem from "../FeedItem";

const Feed: FC = () => {
	const feed: FeedVideoData[] = [
		{
			aweme_id: "v1c044g50000cq82fvvog65q09345284gm0",
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
				id: "6660909234060410886",
				unique_id: "sangitathokar1",
				nickname: "🔪sangitathokar1🔥",
				avatar:
					"https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/ce53518c726d7998f7b4d392f42d89ea~c5_300x300.jpeg?lk3s=45126217&nonce=42641&refresh_token=2ccedb115211f91fd1efdc08b9eeba68&x-expires=1723453200&x-signature=jBv%2FCdZWvvFFT8zXO1EXPMBcNsY%3D&shp=45126217&shcp=-",
			},
			is_top: 0,
		},
		{
			aweme_id: "v10044g50000cphu0cvog65uvrp9vg",
			video_id: "7377988328580304146",
			region: "JP",
			title:
				"#グリーンスクリーン just chek in daily and get 5k yen #japan #tiktok #tiktoklite #tiktoklite換金 #sabinagendiaries #नगेन्द्र #foryoupage #fromjapan",
			cover:
				"https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/os4SJRQIEDAMnDx8e4Xgjr55fVBUnIAeMC8jB3~tplv-dmt-logoccm:300:400:tos-alisg-i-0068/oojEIYBmUAjAxhdib49ZmkA3AVBBBPixvAELi.jpeg",
			ai_dynamic_cover:
				"https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/fcaecfc805d54ece9c763c70d07219a4_1717821786~tplv-dmt-logom:tos-alisg-i-0068/oojEIYBmUAjAxhdib49ZmkA3AVBBBPixvAELi.image",
			origin_cover:
				"https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/3ab3292b58764c07aa20aa39516b5859_1717821785~tplv-tiktokx-360p.jpeg",
			duration: 95,
			play: "https://v16m-default.akamaized.net/518d43931057b6280a0272fb9f0d2998/66b8de6a/video/tos/alisg/tos-alisg-pve-0037c001/oopQgEGuU1zAan5GtDiTAiKCIAMB6wuoMIfNUH/?a=0&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=5056&bt=2528&cs=0&ds=3&ft=XE5bCqT0m7jPD12TLL173wUPGIyKMeF~O5&mime_type=video_mp4&qs=0&rc=PGU6ZWg4NWVlODlkZzNkOEBpMzprZW85cnE0czMzODczNEBeNC02MDQvXjQxNTVeYjA0YSNhNTZxMmRjYl5gLS1kMS1zcw%3D%3D&vvpl=1&l=2024081109525226209811B948C9D3EAE5&btag=e00088000&shp=6da16bae&shcp=-",
			wmplay:
				"https://v16m-default.akamaized.net/d8a0098a8b4e41fbb520dbe65cf7867f/66b5ee0a/video/tos/alisg/tos-alisg-pve-0037c001/4b5oAIfBQIfCBaEAEBpOA4AcCU8uApnEFCIAfBJHgBgPQOQCAGIA/?a=0&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=2446&bt=1223&cs=0&ds=3&ft=XE5bCqT0m7jPD12lEb273wUPGIyKMeF~O5&mime_type=video_mp4&qs=0&rc=ZDk2OGQ4ZGhkNGZoNjpmN0BpM2o7PHQ5cnk1dDMzODczNEAzLmJmYTVgX2AxNi5gNGAuYSNqMWwtMmRzYzVgLS1kMWBzcw%3D%3D&vvpl=1&l=2024080820351135A5C32574DDFD0B1D7A&btag=e00088000",
			music:
				"https://sf16-ies-music-sg.tiktokcdn.com/obj/tiktok-obj/7390451090238180112.mp3",
			music_info: {
				id: "7390451100971453202",
				title: "original sound - サビナ",
				play: "https://sf16-ies-music-sg.tiktokcdn.com/obj/tiktok-obj/7390451090238180112.mp3",
				cover:
					"https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/6efb3319684989f40d4afb30571076ff.jpeg",
				author: "Sabina",
				original: true,
				duration: 95,
				album: "",
			},
			play_count: 11432019,
			digg_count: 314059,
			comment_count: 3866,
			share_count: 91021,
			download_count: 26377,
			create_time: 1717821781,
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
				id: "7320806498648638469",
				unique_id: "petsdance7",
				nickname: "petsdance7",
				avatar:
					"https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/ce53518c726d7998f7b4d392f42d89ea~c5_300x300.jpeg?lk3s=45126217&nonce=42641&refresh_token=2ccedb115211f91fd1efdc08b9eeba68&x-expires=1723453200&x-signature=jBv%2FCdZWvvFFT8zXO1EXPMBcNsY%3D&shp=45126217&shcp=-",
			},
			is_top: 0,
		},
		{
			aweme_id: "v1c044g50000cq82fvvog65q09o84gm0888",
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
			play: "https://v16m-default.akamaized.net/ef4186c803e2cfd1bca0f8e25316518d/66b8dea6/video/tos/alisg/tos-alisg-pve-0037c001/oUaYQIfEGI8hzF0fAIeMANQ6aLehTaGRW7PGlY/?a=0&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=3988&bt=1994&cs=0&ds=3&ft=XE5bCqT0m7jPD12TLL173wUPGIyKMeF~O5&mime_type=video_mp4&qs=0&rc=Ozs2NGY2aWQ0ZGdnNzQ2OkBpanlqbng5cjpmdDMzODczNEAzNjYtNjYvNjExY15iXmFfYSM0bjFzMmRzcGBgLS1kMTFzcw%3D%3D&vvpl=1&l=2024081109525226209811B948C9D3EAE5&btag=e00090000&shp=6da16bae&shcp=-",
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
				id: "6606187808288047109",
				unique_id: "anjali.nepali",
				nickname: "Anjali___Nepali",
				avatar:
					"https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/ce53518c726d7998f7b4d392f42d89ea~c5_300x300.jpeg?lk3s=45126217&nonce=42641&refresh_token=2ccedb115211f91fd1efdc08b9eeba68&x-expires=1723453200&x-signature=jBv%2FCdZWvvFFT8zXO1EXPMBcNsY%3D&shp=45126217&shcp=-",
			},
			is_top: 0,
		},
		{
			aweme_id: "v10044g50000cphu0cvog65uvrp9p4vg77",
			video_id: "7377988328580304146",
			region: "JP",
			title:
				"#グリーンスクリーン just chek in daily and get 5k yen #japan #tiktok #tiktoklite #tiktoklite換金 #sabinagendiaries #नगेन्द्र #foryoupage #fromjapan",
			cover:
				"https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/os4SJRQIEDAMnDx8e4Xgjr55fVBUnIAeMC8jB3~tplv-dmt-logoccm:300:400:tos-alisg-i-0068/oojEIYBmUAjAxhdib49ZmkA3AVBBBPixvAELi.jpeg",
			ai_dynamic_cover:
				"https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/fcaecfc805d54ece9c763c70d07219a4_1717821786~tplv-dmt-logom:tos-alisg-i-0068/oojEIYBmUAjAxhdib49ZmkA3AVBBBPixvAELi.image",
			origin_cover:
				"https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/3ab3292b58764c07aa20aa39516b5859_1717821785~tplv-tiktokx-360p.jpeg",
			duration: 95,
			play: "https://v16m-default.akamaized.net/ef4186c803e2cfd1bca0f8e25316518d/66b8dea6/video/tos/alisg/tos-alisg-pve-0037c001/oUaYQIfEGI8hzF0fAIeMANQ6aLehTaGRW7PGlY/?a=0&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=3988&bt=1994&cs=0&ds=3&ft=XE5bCqT0m7jPD12TLL173wUPGIyKMeF~O5&mime_type=video_mp4&qs=0&rc=Ozs2NGY2aWQ0ZGdnNzQ2OkBpanlqbng5cjpmdDMzODczNEAzNjYtNjYvNjExY15iXmFfYSM0bjFzMmRzcGBgLS1kMTFzcw%3D%3D&vvpl=1&l=2024081109525226209811B948C9D3EAE5&btag=e00090000&shp=6da16bae&shcp=-",
			wmplay:
				"https://v16m-default.akamaized.net/d8a0098a8b4e41fbb520dbe65cf7867f/66b5ee0a/video/tos/alisg/tos-alisg-pve-0037c001/4b5oAIfBQIfCBaEAEBpOA4AcCU8uApnEFCIAfBJHgBgPQOQCAGIA/?a=0&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=2446&bt=1223&cs=0&ds=3&ft=XE5bCqT0m7jPD12lEb273wUPGIyKMeF~O5&mime_type=video_mp4&qs=0&rc=ZDk2OGQ4ZGhkNGZoNjpmN0BpM2o7PHQ5cnk1dDMzODczNEAzLmJmYTVgX2AxNi5gNGAuYSNqMWwtMmRzYzVgLS1kMWBzcw%3D%3D&vvpl=1&l=2024080820351135A5C32574DDFD0B1D7A&btag=e00088000",
			music:
				"https://sf16-ies-music-sg.tiktokcdn.com/obj/tiktok-obj/7390451090238180112.mp3",
			music_info: {
				id: "7390451100971453202",
				title: "original sound - サビナ",
				play: "https://sf16-ies-music-sg.tiktokcdn.com/obj/tiktok-obj/7390451090238180112.mp3",
				cover:
					"https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/6efb3319684989f40d4afb30571076ff.jpeg",
				author: "Sabina",
				original: true,
				duration: 95,
				album: "",
			},
			play_count: 11432019,
			digg_count: 314059,
			comment_count: 3866,
			share_count: 91021,
			download_count: 26377,
			create_time: 1717821781,
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
				id: "7385985796877671442",
				unique_id: "sabina",
				nickname: "Sabina",
				avatar:
					"https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/ce53518c726d7998f7b4d392f42d89ea~c5_300x300.jpeg?lk3s=45126217&nonce=42641&refresh_token=2ccedb115211f91fd1efdc08b9eeba68&x-expires=1723453200&x-signature=jBv%2FCdZWvvFFT8zXO1EXPMBcNsY%3D&shp=45126217&shcp=-",
			},
			is_top: 0,
		},
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
			play: "https://v16m-default.akamaized.net/ef4186c803e2cfd1bca0f8e25316518d/66b8dea6/video/tos/alisg/tos-alisg-pve-0037c001/oUaYQIfEGI8hzF0fAIeMANQ6aLehTaGRW7PGlY/?a=0&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=3988&bt=1994&cs=0&ds=3&ft=XE5bCqT0m7jPD12TLL173wUPGIyKMeF~O5&mime_type=video_mp4&qs=0&rc=Ozs2NGY2aWQ0ZGdnNzQ2OkBpanlqbng5cjpmdDMzODczNEAzNjYtNjYvNjExY15iXmFfYSM0bjFzMmRzcGBgLS1kMTFzcw%3D%3D&vvpl=1&l=2024081109525226209811B948C9D3EAE5&btag=e00090000&shp=6da16bae&shcp=-",
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
					"https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/ce53518c726d7998f7b4d392f42d89ea~c5_300x300.jpeg?lk3s=45126217&nonce=42641&refresh_token=2ccedb115211f91fd1efdc08b9eeba68&x-expires=1723453200&x-signature=jBv%2FCdZWvvFFT8zXO1EXPMBcNsY%3D&shp=45126217&shcp=-",
			},
			is_top: 0,
		},
		{
			item_comment_settings: 0,
			aweme_id: "v10044g50000cphu0cvog65uvrp9p4vg55",
			video_id: "7377988328580304146",
			region: "JP",
			title:
				"#グリーンスクリーン just chek in daily and get 5k yen #japan #tiktok #tiktoklite #tiktoklite換金 #sabinagendiaries #नगेन्द्र #foryoupage #fromjapan",
			cover:
				"https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/os4SJRQIEDAMnDx8e4Xgjr55fVBUnIAeMC8jB3~tplv-dmt-logoccm:300:400:tos-alisg-i-0068/oojEIYBmUAjAxhdib49ZmkA3AVBBBPixvAELi.jpeg",
			ai_dynamic_cover:
				"https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/fcaecfc805d54ece9c763c70d07219a4_1717821786~tplv-dmt-logom:tos-alisg-i-0068/oojEIYBmUAjAxhdib49ZmkA3AVBBBPixvAELi.image",
			origin_cover:
				"https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/3ab3292b58764c07aa20aa39516b5859_1717821785~tplv-tiktokx-360p.jpeg",
			duration: 95,
			play: "https://v16m-default.akamaized.net/ef4186c803e2cfd1bca0f8e25316518d/66b8dea6/video/tos/alisg/tos-alisg-pve-0037c001/oUaYQIfEGI8hzF0fAIeMANQ6aLehTaGRW7PGlY/?a=0&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=3988&bt=1994&cs=0&ds=3&ft=XE5bCqT0m7jPD12TLL173wUPGIyKMeF~O5&mime_type=video_mp4&qs=0&rc=Ozs2NGY2aWQ0ZGdnNzQ2OkBpanlqbng5cjpmdDMzODczNEAzNjYtNjYvNjExY15iXmFfYSM0bjFzMmRzcGBgLS1kMTFzcw%3D%3D&vvpl=1&l=2024081109525226209811B948C9D3EAE5&btag=e00090000&shp=6da16bae&shcp=-",
			wmplay:
				"https://v16m-default.akamaized.net/d8a0098a8b4e41fbb520dbe65cf7867f/66b5ee0a/video/tos/alisg/tos-alisg-pve-0037c001/4b5oAIfBQIfCBaEAEBpOA4AcCU8uApnEFCIAfBJHgBgPQOQCAGIA/?a=0&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=2446&bt=1223&cs=0&ds=3&ft=XE5bCqT0m7jPD12lEb273wUPGIyKMeF~O5&mime_type=video_mp4&qs=0&rc=ZDk2OGQ4ZGhkNGZoNjpmN0BpM2o7PHQ5cnk1dDMzODczNEAzLmJmYTVgX2AxNi5gNGAuYSNqMWwtMmRzYzVgLS1kMWBzcw%3D%3D&vvpl=1&l=2024080820351135A5C32574DDFD0B1D7A&btag=e00088000",
			music:
				"https://sf16-ies-music-sg.tiktokcdn.com/obj/tiktok-obj/7390451090238180112.mp3",
			music_info: {
				id: "7390451100971453202",
				title: "original sound - サビナ",
				play: "https://sf16-ies-music-sg.tiktokcdn.com/obj/tiktok-obj/7390451090238180112.mp3",
				cover:
					"https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/6efb3319684989f40d4afb30571076ff.jpeg",
				author: "Sabina",
				original: true,
				duration: 95,
				album: "",
			},
			play_count: 11432019,
			digg_count: 314059,
			comment_count: 3866,
			share_count: 91021,
			download_count: 26377,
			create_time: 1717821781,
			anchors: null,
			anchors_extras: "",
			is_ad: false,
			is_top: 0,
			commerce_info: {
				adv_promotable: false,
				auction_ad_invited: false,
				branded_content_type: 0,
				with_comment_filter_words: false,
			},
			commercial_video_info: "",
			author: {
				id: "7385985796877671442",
				unique_id: "sabina",
				nickname: "Sabina",
				avatar:
					"https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/ce53518c726d7998f7b4d392f42d89ea~c5_300x300.jpeg?lk3s=45126217&nonce=42641&refresh_token=2ccedb115211f91fd1efdc08b9eeba68&x-expires=1723453200&x-signature=jBv%2FCdZWvvFFT8zXO1EXPMBcNsY%3D&shp=45126217&shcp=-",
			},
		},
	];

	return (
		<section className="w-full h-full overflow-y-auto flex flex-col items-center ">
			{feed.map((videoData) => (
				<FeedItem key={videoData.aweme_id} videoData={videoData} />
			))}
		</section>
	);
};

export default Feed;
