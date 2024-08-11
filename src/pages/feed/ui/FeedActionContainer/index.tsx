import { type FC, useMemo } from "react";
import { IonAvatar, IonIcon, IonButton } from "@ionic/react";
import { heart, bookmark, arrowRedo, chatbubbleEllipses } from "ionicons/icons";

import { Link } from "react-router-dom";

import { formatNumber } from "shared/helpers";

import type { FeedActionContainerProps } from "../../model/props";

const FeedActionContainer: FC<FeedActionContainerProps> = ({
	avatarUrl,
	uniqueId,
	diggCount,
	commentCount,
	downloadCount,
	shareCount,
}) => {
	const details = useMemo(
		() => [
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
		],
		[diggCount, commentCount, downloadCount, shareCount],
	);

	return (
		<div className="p-5 flex flex-col items-center absolute bottom-0 right-0 z-10 md:relative md:p-0">
			<Link to={`/user/${uniqueId}`}>
				<IonAvatar className="size-12">
					<img alt="Silhouette of a person's head" src={avatarUrl} />
				</IonAvatar>
			</Link>

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

export default FeedActionContainer;
