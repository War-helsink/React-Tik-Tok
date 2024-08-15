import { useState, useCallback } from "react";
import { useGetFeedSearchQuery } from "../../api/api";
import type { VideoData } from "shared/interfaces";

export const useFeedSearch = (keywords: string) => {
	const [count, setCount] = useState(10);
	const { data, isLoading } = useGetFeedSearchQuery({
		keywords,
		count,
	});

	const loadNextPage = useCallback(() => {
		setCount((prev) => prev + 10);
	}, []);

	return {
		data: data ? data.data.videos : ([] as VideoData[]),
		isLoading,
		hasMore: data ? data.data.hasMore : false,
		loadNextPage
	};
};
