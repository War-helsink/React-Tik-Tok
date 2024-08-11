import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { UserVideosResponse, UserVideosParams } from "../model";

const RAPIDAPI_HOST = import.meta.env.VITE_RAPIDAPI_HOST;
const RAPIDAPI_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
const BASE_URL = `https://${RAPIDAPI_HOST}/`;

export const userVideosApi = createApi({
	reducerPath: "userVideosApi",
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: (builder) => ({
		getUserVideos: builder.query<UserVideosResponse, UserVideosParams>({
			query: (params) => {
				const { uniqueId, userId, count = 10, cursor = 0 } = params || {};
				return {
					url: "/user/posts",
					params: {
						unique_id: uniqueId,
						user_id: userId,
						cursor: cursor,
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

export const { useGetUserVideosQuery } = userVideosApi;
