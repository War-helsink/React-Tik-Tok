import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { FeedResponse, FeedParams } from "../model";

const RAPIDAPI_HOST = import.meta.env.VITE_RAPIDAPI_HOST;
const RAPIDAPI_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
const REGION = import.meta.env.VITE_REGION;
const BASE_URL = `https://${RAPIDAPI_HOST}/`;

export const feedApi = createApi({
	reducerPath: "feedApi",
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: (builder) => ({
		getFeed: builder.query<FeedResponse, FeedParams>({
			query: (params) => {
				const { count = 10 } = params || {};
				return {
					url: "feed/list",
					params: {
						region: REGION,
						count: count,
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

export const { useGetFeedQuery } = feedApi;
