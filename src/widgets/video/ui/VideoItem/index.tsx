import type { FC } from "react";
import VideoDetails from "../VideoDetails";
import VideoActionContainer from "../VideoActionContainer";

import type { VideoItemProps } from "../../model/props";

const VideoItem: FC<VideoItemProps> = ({ videoData, playing = false }) => {
	return (
		<article className="min-h-full max-h-full relative flex gap-5 justify-center items-end md:py-5">
			<VideoDetails url={videoData.play} videoData={videoData} playing={playing} />

			<VideoActionContainer
				avatarUrl={videoData.author.avatar}
				uniqueId={videoData.author.unique_id}
				diggCount={videoData.digg_count}
				commentCount={videoData.comment_count}
				downloadCount={videoData.download_count}
				shareCount={videoData.share_count}
			/>
		</article>
	);
};

export default VideoItem;
