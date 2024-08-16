import type { FC } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
	musicalNotes,
	heart,
	bookmark,
	chatbubbleEllipses,
} from "ionicons/icons";
import { IonAvatar, IonButton, IonIcon, useIonToast } from "@ionic/react";

import { formatNumber } from "shared/helpers";

import type { AuthorInfoProps } from "../../model/props";

const AuthorInfo: FC<AuthorInfoProps> = ({ videoData }) => {
	const { t } = useTranslation();
	const [present] = useIonToast();

	const titleWords = videoData.title.trim().split(" ");

	const details = [
		{
			icon: heart,
			count: videoData.digg_count,
		},
		{
			icon: chatbubbleEllipses,
			count: videoData.comment_count,
		},
		{
			icon: bookmark,
			count: videoData.download_count,
		},
	];

	const BASE_URL = window.location.origin;
	const link = `${BASE_URL}/${videoData.author.unique_id}/video/${videoData.video_id}`;

	const presentToast = () => {
		navigator.clipboard.writeText(link).then(() => {
			present({
				color: "primary",
				message: t("copied_toast"),
				duration: 1000,
				position: "top",
			});
		});
	};

	return (
		<>
			<div className="p-4 rounded-xl bg-background-contrast">
				<div className="flex justify-between items-center">
					<div className="flex gap-3 items-center">
						<Link
							to={`/user/${videoData.author.unique_id}`}
							className="flex items-center"
						>
							<IonAvatar className="size-10 overflow-hidden">
								<img
									alt="Silhouette of a person's head"
									src={videoData.author.avatar}
								/>
							</IonAvatar>
						</Link>

						<Link
							to={`/user/${videoData.author.unique_id}`}
							className="flex flex-col group"
						>
							<span className="text-base group-hover:underline">
								{videoData.author.unique_id}
							</span>
							<span className="text-sm">{videoData.author.nickname}</span>
						</Link>
					</div>
					<IonButton
						className="normal-case h-9 min-w-28"
						color="tik-tok-button"
					>
						{t("follow")}
					</IonButton>
				</div>
				<p>
					{titleWords.map((word, index) => {
						if (word.includes("#")) {
							return (
								<Link
									to={`/tag/${word.replace("#", "")}`}
									key={`key_${index}_${word.replace("#", "")}`}
									className="hover:underline text-primary-default"
								>
									{`${word} `}
								</Link>
							);
						}

						return `${word} `;
					})}
				</p>
				<p className="mt-2">
					<Link
						to={`/music/${videoData.music_info.id}`}
						className="hover:underline flex items-center gap-1"
					>
						<IonIcon icon={musicalNotes} /> {videoData.music_info.title}
					</Link>
				</p>
			</div>

			<div className="pt-4 flex gap-5 text-sm">
				{details.map((detail) => (
					<div key={detail.count} className="flex items-center gap-1.5">
						<IonButton className="size-8 m-0" color="light" shape="round">
							<IonIcon slot="icon-only" icon={detail.icon} />
						</IonButton>
						<strong>{formatNumber(detail.count)}</strong>
					</div>
				))}
			</div>

			<div className="flex overflow-hidden w-full rounded-lg mt-4 border border-border-default">
				<p className="truncate pl-2 flex-shrink flex-grow flex-basis-auto flex items-center bg-background-contrast">
					{link}
				</p>
				<button
					type="button"
					className="flex-shrink-0 flex-grow-0 flex-basis-auto px-4 py-1.5 font-bold text-sm bg-background-default hover:bg-background-toolbar"
					onClick={presentToast}
				>
					{t("copy_link")}
				</button>
			</div>
		</>
	);
};

export default AuthorInfo;
