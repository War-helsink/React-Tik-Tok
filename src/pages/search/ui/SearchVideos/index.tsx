import { type FC, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { withSkeleton } from "shared/hoc";

import type { SearchVideosProps } from "../../model/props";
import SearchVideoItem from "../SearchVideoItem";

const SearchVideos: FC<SearchVideosProps> = ({ videosData }) => {
	const [active, setActive] = useState(0);

	const nextPage = () => {
		console.log("nextPage");
	};

	return (
		<>
			<InfiniteScroll
				className="mt-4"
				dataLength={videosData.length}
				hasMore={false}
				next={nextPage}
				loader={<h4>Loading...</h4>}
			>
				<section className="w-full h-full overflow-y-auto flex flex-wrap gap-3">
					{videosData.map((videoData, index) => (
						<SearchVideoItem
							key={videoData.aweme_id}
							videoData={videoData}
							playing={active === index}
							onPlay={() => setActive(index)}
						/>
					))}
				</section>
			</InfiniteScroll>
		</>
	);
};

export default withSkeleton(SearchVideos, 12, "itemV2", "row");
