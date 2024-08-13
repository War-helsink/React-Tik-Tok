import { useGetFeedListQuery } from "../../api/api";
import type { VideoData } from "shared/interfaces";

export const useFeedList = () => {
	const { data, isLoading } = useGetFeedListQuery({});

	return { data: data ? data.data : ([] as VideoData[]), isLoading };
};
