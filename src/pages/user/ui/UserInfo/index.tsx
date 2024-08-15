import type { FC } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { IonAvatar, IonButton, IonIcon } from "@ionic/react";

import {
	arrowRedoOutline,
	ellipsisHorizontal,
	logoYoutube,
	logoTwitter,
	logoInstagram,
} from "ionicons/icons";

import { formatNumber } from "shared/helpers";

import type { UserInfoProps } from "../../model/props";

const UserInfo: FC<UserInfoProps> = ({
	user,
	followingCount,
	followerCount,
	heartCount,
	videoCount,
}) => {
	const { t } = useTranslation();

	const statsData = [
		{
			text: t("following"),
			count: followingCount,
		},
		{
			text: t("followers"),
			count: followerCount,
		},
		{
			text: t("likes"),
			count: heartCount,
		},
		{
			text: t("videos"),
			count: videoCount,
		},
	];

	const socialsData = [
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
	];

	return (
		<div className="flex gap-7">
			<IonAvatar className="size-56">
				<img alt="Avatar" src={user.avatarMedium} />
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
					<IonButton className="normal-case min-w-28" color="tik-tok-button">
						{t("follow")}
					</IonButton>
					<IonButton className="normal-case min-w-28" color="light">
						{t("message")}
					</IonButton>
					<IonButton color="light">
						<IonIcon slot="icon-only" icon={arrowRedoOutline} />
					</IonButton>
					<IonButton color="light">
						<IonIcon slot="icon-only" icon={ellipsisHorizontal} />
					</IonButton>
				</div>
			</div>
		</div>
	);
};

export default UserInfo;
