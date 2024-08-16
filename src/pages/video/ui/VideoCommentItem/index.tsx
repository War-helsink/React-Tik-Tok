import type { FC } from "react";
import { Link } from "react-router-dom";
import { IonAvatar, IonIcon } from "@ionic/react";
import { heartOutline } from "ionicons/icons";

import { formatNumber } from "shared/helpers";

import type { VideoCommentItemProps } from "../../model/props";

const VideoCommentItem: FC<VideoCommentItemProps> = ({ comment }) => {
	return (
		<div className="w-full flex gap-3 items-center">
			<Link
				to={`/user/${comment.user.unique_id}`}
				className="flex items-center"
			>
				<IonAvatar className="size-10 overflow-hidden">
					<img alt="Silhouette of a person's head" src={comment.user.avatar} />
				</IonAvatar>
			</Link>

			<div className="flex-grow">
				<Link
					to={`/user/${comment.user.unique_id}`}
					className="text-base hover:underline"
				>
					{comment.user.unique_id}
				</Link>
				<p className="text-sm">{comment.text}</p>
			</div>

			<div className="flex flex-col items-center gap-1.5 opacity-50 cursor-pointer">
				<IonIcon slot="icon-only" icon={heartOutline} />
				<span>{formatNumber(comment.digg_count)}</span>
			</div>
		</div>
	);
};

export default VideoCommentItem;
