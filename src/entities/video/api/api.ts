import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { VideoResponse, VideoParams } from "../model";

const RAPIDAPI_HOST = import.meta.env.VITE_RAPIDAPI_HOST;
const RAPIDAPI_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
const BASE_URL = `https://${RAPIDAPI_HOST}/`;

export const videoApi = createApi({
	reducerPath: "videoApi",
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: (builder) => ({
		getVideo: builder.query<VideoResponse, VideoParams>({
			query: (params) => {
				const { uniqueId, videoId } = params || {};
				const url = uniqueId
					? `https://www.tiktok.com/${uniqueId}/video/${videoId}`
					: `https://www.tiktok.com/video/${videoId}`;

				return {
					url: "feed/list",
					params: {
						url: url,
						hd: "1",
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

export const { useGetVideoQuery } = videoApi;
