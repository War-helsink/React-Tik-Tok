import type { FC } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// import { useVideo } from "entities/video";
import SingleVideoComment from "./SingleVideoComment";
import SingleVideo from "./SingleVideo";

const SingleVideoPage: FC = () => {
	const { videoId, uniqueId } = useParams();
	// const { data: videoData, isLoading } = useVideo({ videoId, uniqueId });

	const videoData = {
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
		play: "https://v16m-default.akamaized.net/e6d0a9c4c6233e500f5e18eca049fade/66bcfaac/video/tos/maliva/tos-maliva-ve-0068c799-us/o0VI0vfHAA2QJjP6AIeIt4knsbeTxBbDHIC5aU/?a=0&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=152&bt=76&cs=0&ds=6&ft=XE5bCqT0m7jPD12M95M73wULSDyKMeF~O5&mime_type=video_mp4&qs=0&rc=ZmY6Ozk2aTs5NzxnOzk8PEBpM215aTs6ZnVnazMzZzczNEA2MTMzM2MzNWAxLmIzYi80YSMxL2QycjQwc2FgLS1kMS9zcw%3D%3D&vvpl=1&l=20240814124151A8AB3A3E0639A512D7F0&btag=e00090000&shp=6da16bae&shcp=-",
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
				"https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/7353798309405786133~c5_300x300.jpeg?lk3s=45126217&nonce=49521&refresh_token=2d7d53fe7068c69ea9611d3941699e2b&x-expires=1723543200&x-signature=RCtepbZw%2BomsEKtRN%2BTaplyPUI4%3D&shp=45126217&shcp=-",
		},
		is_top: 0,
	};

	return (
		<>
			<Helmet>
				<title>Video {videoId}</title>
			</Helmet>
			<main className="w-full h-full flex">
				<SingleVideo videoData={videoData} />
				<SingleVideoComment />
			</main>
		</>
	);
};

export default SingleVideoPage;
