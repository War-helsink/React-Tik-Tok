import type { FC } from "react";
import { IonAvatar, IonIcon, IonButton } from "@ionic/react";
import { heart, bookmark, arrowRedo, chatbubbleEllipses } from "ionicons/icons";

import { Link } from "react-router-dom";

import { formatNumber } from "shared/helpers";
import VideoDetails from "../VideoDetails";

import type { FeedItemProps } from "../../model/props";

const FeedItem: FC<FeedItemProps> = ({ videoData }) => {
	return (
		<article className="min-h-full max-h-full relative flex gap-5 justify-center items-end md:py-5">
			<VideoDetails
				videoId={videoData.video_id}
				url={videoData.play}
				videoData={videoData}
			/>

			<div className="p-5 flex flex-col items-center absolute bottom-0 right-0 z-10 md:relative md:p-0">
				<Link to={`/user/${videoData.author.unique_id}`}>
					<IonAvatar className="size-12">
						<img
							alt="Silhouette of a person's head"
							src={videoData.author.avatar}
						/>
					</IonAvatar>
				</Link>
				<div className="flex flex-col items-center">
					<IonButton className="size-12" color="light" shape="round">
						<IonIcon slot="icon-only" icon={heart} />
					</IonButton>
					<strong className="text-sm">
						{formatNumber(videoData.digg_count)}
					</strong>
				</div>
				<div className="flex flex-col items-center">
					<IonButton className="size-12" color="light" shape="round">
						<IonIcon slot="icon-only" icon={chatbubbleEllipses} />
					</IonButton>
					<strong className="text-sm">
						{formatNumber(videoData.comment_count)}
					</strong>
				</div>

				<div className="flex flex-col items-center">
					<IonButton className="size-12" color="light" shape="round">
						<IonIcon slot="icon-only" icon={bookmark} />
					</IonButton>
					<strong className="text-sm">
						{formatNumber(videoData.download_count)}
					</strong>
				</div>

				<div className="flex flex-col items-center">
					<IonButton className="size-12" color="light" shape="round">
						<IonIcon slot="icon-only" icon={arrowRedo} />
					</IonButton>
					<strong className="text-sm">
						{formatNumber(videoData.share_count)}
					</strong>
				</div>
			</div>
		</article>
	);
};

export default FeedItem;
