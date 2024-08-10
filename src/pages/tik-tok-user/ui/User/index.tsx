import { type FC, useMemo } from "react";
import { Link } from "react-router-dom";

import { IonAvatar, IonButton, IonIcon } from "@ionic/react";

import {
	arrowRedoOutline,
	ellipsisHorizontal,
	logoYoutube,
	logoTwitter,
	logoInstagram,
} from "ionicons/icons";

import { formatNumber } from "shared/helpers";

import TikTokUserTabs from "../UserTabs";
import type { TikTokUserProps } from "../../model/props";

const TikTokUser: FC<TikTokUserProps> = ({ user, stats }) => {
	const statsData = useMemo(
		() => [
			{
				text: "Following",
				count: stats.followingCount,
			},
			{
				text: "Followers",
				count: stats.followerCount,
			},
			{
				text: "Likes",
				count: stats.heartCount,
			},
			{
				text: "Videos",
				count: stats.videoCount,
			},
		],
		[stats],
	);

	const socialsData = useMemo(
		() => [
			{
				link: "https://www.youtube.com",
				icon: logoYoutube,
				id: user.youtube_channel_id,
			},
			{
				link: "https://x.com",
				icon: logoTwitter,
				id: user.twitter_id,
			},
			{
				link: "https://www.instagram.com",
				icon: logoInstagram,
				id: user.ins_id,
			},
		],
		[user],
	);

	return (
		<section className="min-h-full w-full p-9 flex flex-col gap-5 overflow-y-auto">
			<div className="flex gap-7">
				<IonAvatar className="size-56">
					<img alt="Silhouette of a person's head" src={user.avatarMedium} />
				</IonAvatar>
				<div className="flex-grow flex flex-col gap-3">
					<div className="flex flex-wrap items-center gap-3">
						<h1 className="text-2xl mb-1">{user.uniqueId}</h1>
						<h2 className="text-lg">{user.nickname}</h2>
					</div>

					<h3 className="flex flex-wrap items-center gap-3">
						{statsData.map((data) => (
							<div key={data.text}>
								<strong>{formatNumber(data.count)}</strong>
								<span className="ml-1.5 opacity-75 cursor-pointer hover:underline">
									{data.text}
								</span>
							</div>
						))}

						{socialsData.map(
							(data) =>
								data.id && (
									<Link
										to={`${data.link}/${data.id}`}
										key={data.id}
										className="flex"
										target="_blank"
									>
										<IonIcon icon={data.icon} />
									</Link>
								),
						)}
					</h3>
					<h2 className="max-w-full">{user.signature}</h2>

					<div className="flex gap-3">
						<IonButton color="tik-tok-button">Follow</IonButton>
						<IonButton color="light">Message</IonButton>
						<IonButton color="light">
							<IonIcon slot="icon-only" icon={arrowRedoOutline} />
						</IonButton>
						<IonButton color="light">
							<IonIcon slot="icon-only" icon={ellipsisHorizontal} />
						</IonButton>
					</div>
				</div>
			</div>

			<TikTokUserTabs user={user} />
		</section>
	);
};

export default TikTokUser;
