import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type {
	TikTokUserResponse,
	TikTokListResponse,
	TikTokUserVideosResponse,
	TikTokListParams,
	TikTokUserParams,
	TikTokUserVideosParams,
} from "../model";

const RAPIDAPI_HOST = import.meta.env.VITE_RAPIDAPI_HOST;
const RAPIDAPI_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
const REGION = import.meta.env.VITE_REGION;
const BASE_URL = `https://${RAPIDAPI_HOST}/`;

export const tikTokApi = createApi({
	reducerPath: "tikTokApi",
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: (builder) => ({
		getList: builder.query<TikTokListResponse, TikTokListParams>({
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
		getUser: builder.query<TikTokUserResponse, TikTokUserParams>({
			query: (params) => {
				const { uniqueId } = params || {};
				return {
					url: "/user/info",
					params: {
						unique_id: uniqueId,
					},
					headers: {
						"x-rapidapi-key": RAPIDAPI_KEY,
						"x-rapidapi-host": RAPIDAPI_HOST,
					},
				};
			},
		}),

		getUserVideos: builder.query<
			TikTokUserVideosResponse,
			TikTokUserVideosParams
		>({
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

export const { useGetListQuery, useGetUserQuery, useGetUserVideosQuery } =
	tikTokApi;
