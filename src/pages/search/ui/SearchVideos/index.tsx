import { type FC, useState, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import Loader from "shared/ui/Loader";
import NotLoader from "shared/ui/NotLoader";

import { withSkeleton } from "shared/hoc";

import type { SearchVideosProps } from "../../model/props";
import SearchVideoItem from "../SearchVideoItem";

const SearchVideos: FC<SearchVideosProps> = ({
	videosData,
	hasMore,
	loadNextPage,
}) => {
	const scrollableRef = useRef<HTMLDivElement | null>(null);
	const [active, setActive] = useState(0);

	return (
		<section
			id="scrollableDiv"
			className="h-full w-full overflow-y-auto"
			ref={scrollableRef}
		>
			<InfiniteScroll
				className="flex flex-wrap gap-3"
				style={{ overflow: "hidden" }}
				dataLength={videosData.length}
				hasMore={hasMore}
				next={loadNextPage}
				loader={<Loader />}
				endMessage={<NotLoader />}
				scrollableTarget="scrollableDiv"
			>
				{videosData.map((videoData, index) => (
					<SearchVideoItem
						key={videoData.video_id}
						videoData={videoData}
						playing={active === index}
						onPlay={() => setActive(index)}
					/>
				))}
			</InfiniteScroll>
		</section>
	);
};

export default withSkeleton(SearchVideos, 12, "itemV2", "row");
