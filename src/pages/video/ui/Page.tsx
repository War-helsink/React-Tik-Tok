import type { FC } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { useVideo } from "entities/video";
import { useCommentByVideo } from "entities/comment";

import Loader from "shared/ui/Loader";
import VideoCommentsDetails from "./VideoCommentsDetails";
import SingleVideo from "./SingleVideo";

const VideoPage: FC = () => {
	const { videoId, uniqueId } = useParams();
	const { data: videoData } = useVideo({ videoId, uniqueId });
	const { data: commentData } = useCommentByVideo({
		videoId,
		uniqueId,
	});

	// const videoData = {
	// 	aweme_id: "v1c044g50000cq82fvvog65q09345284gm0",
	// 	video_id: "7390451064438377735",
	// 	region: "JP",
	// 	title: "#motorcycle #catdance #trendingvideo #cat",
	// 	cover:
	// 		"https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/os8fE4sAfBABKnAoqEi6DjNBWICAQChIICfbQi~c5_300x400.jpeg",
	// 	ai_dynamic_cover:
	// 		"https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/5ae0838d41f242648dbe24146f9fcb42_1720723489?lk3s=d05b14bd&nonce=49913&refresh_token=4bb5342572eb16827c065d6e234a6963&x-expires=1723150800&x-signature=tGuyDU7P0Kyn%2F434EhD3QvWSv1M%3D&s=AWEME_DETAIL&se=false&sh=&sc=dynamic_cover&l=20240807213454994B5DE04EB7BA0B4649&shp=d05b14bd&shcp=-",
	// 	origin_cover:
	// 		"https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/18ed99fd46534e9ab6cdc7cd95139ab3_1720723488~tplv-tiktokx-360p.jpeg",
	// 	duration: 9,
	// 	play: "https://v16m-default.akamaized.net/e6d0a9c4c6233e500f5e18eca049fade/66bcfaac/video/tos/maliva/tos-maliva-ve-0068c799-us/o0VI0vfHAA2QJjP6AIeIt4knsbeTxBbDHIC5aU/?a=0&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=152&bt=76&cs=0&ds=6&ft=XE5bCqT0m7jPD12M95M73wULSDyKMeF~O5&mime_type=video_mp4&qs=0&rc=ZmY6Ozk2aTs5NzxnOzk8PEBpM215aTs6ZnVnazMzZzczNEA2MTMzM2MzNWAxLmIzYi80YSMxL2QycjQwc2FgLS1kMS9zcw%3D%3D&vvpl=1&l=20240814124151A8AB3A3E0639A512D7F0&btag=e00090000&shp=6da16bae&shcp=-",
	// 	wmplay:
	// 		"https://v16m-default.akamaized.net/34c175e9da57410fa793b55d0b2f8f71/66b43ce8/video/tos/alisg/tos-alisg-pve-0037c001/oYffZQCuENnYIAiWKCCiAI9BCpBsIEjQf64AQD/?a=0&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=2496&bt=1248&cs=0&ds=3&ft=XE5bCqT0m7jPD12lEb273wUPGIyKMeF~O5&mime_type=video_mp4&qs=0&rc=Zjw8ODRlOjM3OGZoZjZkZ0BpM2o7PHQ5cnk1dDMzODczNEA2MDQuY2FiNV8xMy42NDUvYSNqMWwtMmRzYzVgLS1kMWBzcw%3D%3D&vvpl=1&l=20240807213454994B5DE04EB7BA0B4649&btag=e00088000",
	// 	music:
	// 		"https://sf16-ies-music-sg.tiktokcdn.com/obj/tiktok-obj/7390451090238180112.mp3",
	// 	music_info: {
	// 		id: "7390451100971453201",
	// 		title: "original sound - daikiti775",
	// 		play: "https://sf16-ies-music-sg.tiktokcdn.com/obj/tiktok-obj/7390451090238180112.mp3",
	// 		cover:
	// 			"https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/6efb3319684989f40d4afb30571076ff.jpeg",
	// 		author: "Daikiti",
	// 		original: true,
	// 		duration: 9,
	// 		album: "",
	// 	},
	// 	play_count: 13472082,
	// 	digg_count: 349829,
	// 	comment_count: 3686,
	// 	share_count: 91021,
	// 	download_count: 26377,
	// 	create_time: 1720723483,
	// 	anchors: null,
	// 	anchors_extras: "",
	// 	is_ad: false,
	// 	commerce_info: {
	// 		adv_promotable: false,
	// 		auction_ad_invited: false,
	// 		branded_content_type: 0,
	// 		with_comment_filter_words: false,
	// 	},
	// 	commercial_video_info: "",
	// 	item_comment_settings: 0,
	// 	author: {
	// 		id: "6660909234060410886",
	// 		unique_id: "sangitathokar1",
	// 		nickname: "🔪sangitathokar1🔥",
	// 		avatar:
	// 			"https://p16-amd-va.tiktokcdn.com/tos-maliva-avt-0068/68c5565c7d90ff4e4d25d0d1fe2c1ea1~tplv-tiktokx-cropcenter-q:100:100:q75.jpeg?nonce=64834&ps=124&refresh_token=6c17c7fade7104c207faa797f4891698&s=COMMENT_LIST&sc=avatar&shcp=ff37627b&shp=30310797&t=1",
	// 	},
	// 	is_top: 0,
	// };

	// const commentData = {
	// 	comments: [
	// 		{
	// 			id: "7093229463530046213",
	// 			video_id: "7093219391759764782",
	// 			text: "I want blue tick from tik tok account> <3333¥¥",
	// 			create_time: 1651521185,
	// 			digg_count: 92,
	// 			reply_total: 3,
	// 			user: {
	// 				id: "6928440935337116678",
	// 				region: "",
	// 				sec_uid:
	// 					"MS4wLjABAAAAaPXzmccKHs1LuhxIhxi8W4-fj8EqfRJ-oh4u6MRq0hTY1vSglIIE6u661TFaLTxE",
	// 				unique_id: "ahmedagagna",
	// 				nickname: "Ahmed 17",
	// 				signature: "",
	// 				avatar:
	// 					"https://p16-amd-va.tiktokcdn.com/tos-maliva-avt-0068/106e041a0a3d7d3e647de30bd1233942~tplv-tiktokx-cropcenter-q:100:100:q75.jpeg?nonce=6187&ps=124&refresh_token=848f4be5818649c193ebe40ad786c6cd&s=COMMENT_LIST&sc=avatar&shcp=ff37627b&shp=30310797&t=1",
	// 				verified: false,
	// 				secret: false,
	// 				aweme_count: 0,
	// 				following_count: 0,
	// 				follower_count: 0,
	// 				favoriting_count: 0,
	// 				total_favorited: 0,
	// 				ins_id: "",
	// 				youtube_channel_title: "",
	// 				youtube_channel_id: "",
	// 				twitter_name: "",
	// 				twitter_id: "",
	// 			},
	// 			status: 1,
	// 		},
	// 		{
	// 			id: "7093219663211053829",
	// 			video_id: "7093219391759764782",
	// 			text: "ok",
	// 			create_time: 1651518902,
	// 			digg_count: 14,
	// 			reply_total: 4,
	// 			user: {
	// 				id: "6776275679760942085",
	// 				region: "",
	// 				sec_uid:
	// 					"MS4wLjABAAAAyIaQzGixYUo3NC2Qlch-_9cb_zC-Y7yBCBnjm5lwKXXpirHzuaL-1jL7TZ398vkC",
	// 				unique_id: "emmicktaknes",
	// 				nickname: "Emmick Taknæs",
	// 				signature: "",
	// 				avatar:
	// 					"https://p16-amd-va.tiktokcdn.com/tos-maliva-avt-0068/6fb147e9a3c1f35e8e7b4ec7211da051~tplv-tiktokx-cropcenter-q:100:100:q75.jpeg?nonce=67170&ps=124&refresh_token=fb33ad924f5708065fb559b385751456&s=COMMENT_LIST&sc=avatar&shcp=ff37627b&shp=30310797&t=1",
	// 				verified: false,
	// 				secret: false,
	// 				aweme_count: 0,
	// 				following_count: 0,
	// 				follower_count: 0,
	// 				favoriting_count: 0,
	// 				total_favorited: 0,
	// 				ins_id: "",
	// 				youtube_channel_title: "",
	// 				youtube_channel_id: "",
	// 				twitter_name: "",
	// 				twitter_id: "",
	// 			},
	// 			status: 1,
	// 		},
	// 		{
	// 			id: "7094693658687161090",
	// 			video_id: "7093219391759764782",
	// 			text: "Hy Bab so saved 💞💞💞💞💞",
	// 			create_time: 1651862103,
	// 			digg_count: 4,
	// 			reply_total: 2,
	// 			user: {
	// 				id: "7048655283647759386",
	// 				region: "",
	// 				sec_uid:
	// 					"MS4wLjABAAAA5Iecf354J515hd0RCD44X-RAvNDPmcu913fYdxWbXT_Aq7twZb15O0JJ90lPIz5T",
	// 				unique_id: "naeempasha805",
	// 				nickname: "Naeem Pasha pasha",
	// 				signature: "",
	// 				avatar:
	// 					"https://p16-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/4b8688783c3fd2ec7cd1bbf87100b030~tplv-tiktokx-cropcenter-q:100:100:q75.jpeg?nonce=34951&ps=124&refresh_token=1b8fa5b4467f05ff66f8026de714e1c9&s=COMMENT_LIST&sc=avatar&shcp=ff37627b&shp=30310797&t=1",
	// 				verified: false,
	// 				secret: false,
	// 				aweme_count: 0,
	// 				following_count: 0,
	// 				follower_count: 0,
	// 				favoriting_count: 0,
	// 				total_favorited: 0,
	// 				ins_id: "",
	// 				youtube_channel_title: "",
	// 				youtube_channel_id: "",
	// 				twitter_name: "",
	// 				twitter_id: "",
	// 			},
	// 			status: 1,
	// 		},
	// 		{
	// 			id: "7094216873818358530",
	// 			video_id: "7093219391759764782",
	// 			text: "TIKTOK UNFLOP ME RIGHT NOW PLS TIKTOK IM BEGGING YOU:((",
	// 			create_time: 1651751089,
	// 			digg_count: 8,
	// 			reply_total: 2,
	// 			user: {
	// 				id: "7034036474308592667",
	// 				region: "",
	// 				sec_uid:
	// 					"MS4wLjABAAAAxI0lCKtbuyI9NguG8Zazs7zCHg-gScc4kZymUWG-7yi235TwiTGs0EhnGSavL0nG",
	// 				unique_id: "jvndeuxkim",
	// 				nickname: "Jen",
	// 				signature: "",
	// 				avatar:
	// 					"https://p16-amd-va.tiktokcdn.com/tos-maliva-avt-0068/68c5565c7d90ff4e4d25d0d1fe2c1ea1~tplv-tiktokx-cropcenter-q:100:100:q75.jpeg?nonce=69275&ps=124&refresh_token=33a6faabcc5317939cc7b93fae6a4536&s=COMMENT_LIST&sc=avatar&shcp=ff37627b&shp=30310797&t=1",
	// 				verified: false,
	// 				secret: false,
	// 				aweme_count: 0,
	// 				following_count: 0,
	// 				follower_count: 0,
	// 				favoriting_count: 0,
	// 				total_favorited: 0,
	// 				ins_id: "",
	// 				youtube_channel_title: "",
	// 				youtube_channel_id: "",
	// 				twitter_name: "",
	// 				twitter_id: "",
	// 			},
	// 			status: 1,
	// 		},
	// 		{
	// 			id: "7095334917911331586",
	// 			video_id: "7093219391759764782",
	// 			text: "Daer tik tok team l think my tik tok account @hmemonislam1 is freezed please raview my tik tok account@hmemonislam1 it unfreezed thank yon",
	// 			create_time: 1652011405,
	// 			digg_count: 4,
	// 			reply_total: 2,
	// 			user: {
	// 				id: "7069242264409097242",
	// 				region: "",
	// 				sec_uid:
	// 					"MS4wLjABAAAAkCaPwxw9xkB8bDpWkPg5fHCaVd2_9oQPxVMAW9CIMZrbREVvudeUrsfM9b1e4Ay9",
	// 				unique_id: "hmemonislam1",
	// 				nickname: "Hm:Emon",
	// 				signature: "",
	// 				avatar:
	// 					"https://p16-sg.tiktokcdn.com/tos-alisg-avt-0068/cf40abf4c8b8a4c0cd23efc39cab746d~tplv-tiktokx-cropcenter-q:100:100:q80.jpeg?nonce=1381&ps=124&refresh_token=b901194d40fa96e3467da0192a630e8a&s=COMMENT_LIST&sc=avatar&shcp=ff37627b&shp=30310797&t=1",
	// 				verified: false,
	// 				secret: false,
	// 				aweme_count: 0,
	// 				following_count: 0,
	// 				follower_count: 0,
	// 				favoriting_count: 0,
	// 				total_favorited: 0,
	// 				ins_id: "",
	// 				youtube_channel_title: "",
	// 				youtube_channel_id: "",
	// 				twitter_name: "",
	// 				twitter_id: "",
	// 			},
	// 			status: 1,
	// 		},
	// 	],
	// 	total: 2449,
	// 	cursor: 10,
	// 	hasMore: true,
	// };

	return (
		<>
			<Helmet>
				<title>Video {videoId}</title>
			</Helmet>
			<main className="w-full h-full grid grid-cols-[1fr_550px]">
				{videoData && commentData ? (
					<>
						<SingleVideo videoData={videoData} />
						<VideoCommentsDetails
							videoData={videoData}
							comments={commentData.comments}
						/>
					</>
				) : <Loader className="absolute " />}
			</main>
		</>
	);
};

export default VideoPage;
