import { useGetUserVideosQuery } from "../../api/api";
import type { VideoData } from "shared/interfaces";

export const useVideos = (uniqueId: string) => {
	const { data, isLoading } = useGetUserVideosQuery({ uniqueId });

	return {
		data: data ? data.data.videos : ([] as VideoData[]),
		isLoading,
		hasMore: data ? data.data.hasMore : false,
	};
};
