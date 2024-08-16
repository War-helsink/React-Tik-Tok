import { useGetCommentByVideoQuery } from "../../api/api";
import type { CommentByVideoParams } from "../../model";

export const useCommentByVideo = (params: CommentByVideoParams) => {
	const { data, isLoading } = useGetCommentByVideoQuery(params);

	return { data: data ? data.data : undefined, isLoading };
};
