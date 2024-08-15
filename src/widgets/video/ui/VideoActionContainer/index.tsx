import type { FC } from "react";
import { IonAvatar, IonIcon, IonButton } from "@ionic/react";
import {
	add,
	heart,
	bookmark,
	arrowRedo,
	chatbubbleEllipses,
} from "ionicons/icons";

import { Link } from "react-router-dom";

import { formatNumber } from "shared/helpers";

import type { VideoActionContainerProps } from "../../model/props";

const VideoActionContainer: FC<VideoActionContainerProps> = ({
	avatarUrl,
	uniqueId,
	diggCount,
	commentCount,
	downloadCount,
	shareCount,
}) => {
	const details = [
		{
			icon: heart,
			count: diggCount,
		},
		{
			icon: chatbubbleEllipses,
			count: commentCount,
		},
		{
			icon: bookmark,
			count: downloadCount,
		},
		{
			icon: arrowRedo,
			count: shareCount,
		},
	];

	return (
		<div className="p-5 flex flex-col items-center absolute bottom-0 right-0 z-10 md:relative md:p-0">
			<div className="relative mb-5">
				<Link to={`/user/${uniqueId}`}>
					<IonAvatar className="size-12">
						<img alt="Silhouette of a person's head" src={avatarUrl} />
					</IonAvatar>
				</Link>
				<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 size-6 bg-tik-tok-button-default rounded-full flex items-center justify-center cursor-pointer">
					<IonIcon slot="icon-only" icon={add} />
				</div>
			</div>

			{details.map((detail) => (
				<div key={detail.count} className="flex flex-col items-center">
					<IonButton className="size-12" color="light" shape="round">
						<IonIcon slot="icon-only" icon={detail.icon} />
					</IonButton>
					<strong className="text-sm">{formatNumber(detail.count)}</strong>
				</div>
			))}
		</div>
	);
};

export default VideoActionContainer;
