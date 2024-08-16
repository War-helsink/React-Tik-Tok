import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { CommentByVideoResponse, CommentByVideoParams } from "../model";

const RAPIDAPI_HOST = import.meta.env.VITE_RAPIDAPI_HOST;
const RAPIDAPI_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
const BASE_URL = `https://${RAPIDAPI_HOST}/`;

export const commentApi = createApi({
	reducerPath: "commentApi",
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: (builder) => ({
		getCommentByVideo: builder.query<
			CommentByVideoResponse,
			CommentByVideoParams
		>({
			query: (params) => {
				const { uniqueId, videoId, count = 10, cursor = 0 } = params || {};
				const url = uniqueId
					? `https://www.tiktok.com/@${uniqueId}/video/${videoId}`
					: `https://www.tiktok.com/video/${videoId}`;

				return {
					url: "comment/list",
					params: {
						url: url,
						count,
						cursor,
					},
					headers: {
						"x-rapidapi-key": RAPIDAPI_KEY,
						"x-rapidapi-host": RAPIDAPI_HOST,
					},
				};
			},
		}),
	}),
});

export const { useGetCommentByVideoQuery } = commentApi;
