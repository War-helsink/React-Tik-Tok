import type { FC } from "react";

// import { useGetUserQuery} from "entities/tik-tok";
import type { DataUser } from "entities/user";

import UserInfo from "../UserInfo";
import UserTabs from "../UserTabs";

const User: FC = () => {
	const userData: DataUser = {
		user: {
			id: "107955",
			uniqueId: "tiktok",
			nickname: "TikTok",
			avatarThumb:
				"https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7310048624166535211~c5_100x100.jpeg?lk3s=a5d48078&nonce=80513&refresh_token=ff6a37869f6503674a8ea7d698edf030&x-expires=1723323600&x-signature=tVZUozt%2FFb5ZZFk8EJET4cqXN6Y%3D&shp=a5d48078&shcp=2472a6c6",
			avatarMedium:
				"https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7310048624166535211~c5_720x720.jpeg?lk3s=a5d48078&nonce=59492&refresh_token=a2a61aa5e709069ee39b3330603ebde9&x-expires=1723363200&x-signature=UFe4P8bflzPmV4Kn8YdIFcxcBq4%3D&shp=a5d48078&shcp=2472a6c6",
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

	return (
		<section className="min-h-full w-full p-9 flex flex-col gap-5 overflow-y-auto">
			<UserInfo
				user={userData.user}
				followingCount={userData.stats.followingCount}
				followerCount={userData.stats.followerCount}
				heartCount={userData.stats.heartCount}
				videoCount={userData.stats.videoCount}
			/>
			<UserTabs user={userData.user} />
		</section>
	);
};

export default User;
