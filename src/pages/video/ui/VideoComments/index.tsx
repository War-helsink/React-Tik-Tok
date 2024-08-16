import type { FC } from "react";
import { useTranslation } from "react-i18next";

import VideoCommentItem from "../VideoCommentItem";
import type { VideoCommentsProps } from "../../model/props";

const VideoComments: FC<VideoCommentsProps> = ({ comments }) => {
	const { t } = useTranslation();

	return (
		<div className="flex-grow flex flex-col">
			<div className="border-b border-border-default pt-5 mb-6 h-14 text-center">
				{t("comment.name")} ({comments.length})
			</div>

			{comments.length > 0 ? (
				<div className="flex flex-col gap-5">
					{comments.map((comment) => (
						<VideoCommentItem key={comment.id} comment={comment} />
					))}
				</div>
			) : (
				<div className="flex-grow flex items-center justify-center text-sm font-normal opacity-50">
					{t("comment.noComments")}
				</div>
			)}
		</div>
	);
};

export default VideoComments;
