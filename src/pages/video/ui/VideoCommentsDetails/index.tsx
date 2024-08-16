import type { FC } from "react";
import { useTranslation } from "react-i18next";
import type { VideoCommentsDetailsProps } from "../../model/props";

import VideoComments from "../VideoComments";
import AuthorInfo from "../AuthorInfo";

const VideoCommentsDetails: FC<VideoCommentsDetailsProps> = ({
	videoData,
	comments,
}) => {
	const { t } = useTranslation();

	return (
		<>
			<section className="h-full flex flex-col overflow-hidden border-l border-border-default">
				<div className="flex-grow flex flex-col px-8 py-6 overflow-y-auto border-b border-border-default">
					<AuthorInfo videoData={videoData} />
					<VideoComments comments={comments} />
				</div>
				<div className="mx-8 py-5">
					<div className="p-4 rounded-sm bg-background-contrast text-tik-tok-button-default cursor-pointer">
						{t("comment.login")}
					</div>
				</div>
			</section>
		</>
	);
};

export default VideoCommentsDetails;
