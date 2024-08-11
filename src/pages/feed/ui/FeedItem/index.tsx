import type { FC } from "react";
import FeedVideoDetails from "../FeedDetails";
import FeedActionContainer from "../FeedActionContainer";

import type { FeedItemProps } from "../../model/props";

const FeedItem: FC<FeedItemProps> = ({ videoData }) => {
	return (
		<article className="min-h-full max-h-full relative flex gap-5 justify-center items-end md:py-5">
			<FeedVideoDetails url={videoData.play} videoData={videoData} />

			<FeedActionContainer
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

export default FeedItem;
