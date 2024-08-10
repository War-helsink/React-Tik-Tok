import { type FC, useState } from "react";

import type { DataUserVideos } from "entities/tik-tok";
import type { TikTokUserVideosProps } from "../../model/props";

import TikTokUserVideo from "../UserVideo";

const TikTokUserVideos: FC<TikTokUserVideosProps> = ({ hidden }) => {
	const dataVideo: DataUserVideos = {
		videos: [
		],
		cursor: "1722680100000",
		hasMore: true,
	};

	const [active, setActive] = useState(0);

	return (
		<div
			className={`${hidden ? "hidden" : "grid"} grid-cols-auto-fit-minmax w-full gap-x-4 gap-y-6`}
		>
			{dataVideo.videos.length ? (
				dataVideo.videos.map((videoData, index) => (
					<TikTokUserVideo
						key={videoData.aweme_id}
						playing={active === index}
						videoData={videoData}
						onPlay={() => setActive(index)}
					/>
				))
			) : (
				<div>Test</div>
			)}
		</div>
	);
};

export default TikTokUserVideos;
