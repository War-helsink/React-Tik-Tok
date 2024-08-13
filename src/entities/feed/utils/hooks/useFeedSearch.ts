import { useGetFeedSearchQuery } from "../../api/api";
import type { VideoData } from "shared/interfaces";

export const useFeedSearch = (keywords: string | null) => {
	const { data, isLoading } = useGetFeedSearchQuery({
		keywords: keywords as string,
	});

	return {
		data: data ? data.data.videos : ([] as VideoData[]),
		isLoading,
		hasMore: data ? data.data.hasMore : false,
	};
};
