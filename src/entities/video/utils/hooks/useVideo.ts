import { useGetVideoQuery } from "../../api/api";
import type { VideoParams } from "../../model";

export const useVideo = ({ videoId, uniqueId }: VideoParams) => {
	const { data, isLoading } = useGetVideoQuery({ videoId, uniqueId });

	return { data: data ? data.data : undefined, isLoading };
};
