import { type FC, useState } from "react";
import { withSkeleton } from "shared/hoc";

import type { VideosProps } from "../../model/props";
import VideoItem from "../VideoItem";

const Videos: FC<VideosProps> = ({ videosData }) => {
	const [playing, setPlaying] = useState<number>(0);

	const handleScroll = (ev: any) => {
		const container = ev.target as HTMLElement;
		if (!container) return;

		const scrollTop = container.scrollTop;
		const blocks = container.children;

		for (let i = 0; i < blocks.length; i++) {
			const block = blocks[i] as HTMLElement;
			const blockHeight = block.clientHeight;

			if (
				scrollTop >= block.offsetTop - blockHeight / 2 &&
				scrollTop + blockHeight / 2 <= block.offsetTop + blockHeight
			) {
				if (playing !== i) {
					setPlaying(i);
				}
				break;
			}
		}
	};

	return (
		<section
			className="w-full h-full overflow-y-auto flex flex-col items-center"
			onScroll={handleScroll}
		>
			{videosData.map((videoData, index) => (
				<VideoItem
					key={videoData.aweme_id}
					videoData={videoData}
					playing={playing === index}
				/>
			))}
		</section>
	);
};

export default withSkeleton(Videos, 10);
