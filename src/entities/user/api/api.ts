import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { UserResponse, UserParams } from "../model";

const RAPIDAPI_HOST = import.meta.env.VITE_RAPIDAPI_HOST;
const RAPIDAPI_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
const BASE_URL = `https://${RAPIDAPI_HOST}/`;

export const userApi = createApi({
	reducerPath: "userApi",
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: (builder) => ({
		getUser: builder.query<UserResponse, UserParams>({
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
	}),
});

export const { useGetUserQuery } = userApi;
