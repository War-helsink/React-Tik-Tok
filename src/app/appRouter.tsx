import { createBrowserRouter } from "react-router-dom";
import BaseLayouts from "./layouts/BaseLayouts";
import ErrorLayouts from "./layouts/ErrorLayouts";

import { FeedPage } from "pages/feed";
import { UserPage } from "pages/user";
import { SearchPage } from "pages/search";

export const appRouter = createBrowserRouter([
	{
		element: <BaseLayouts />,
		errorElement: <ErrorLayouts />,
		children: [
			{ path: "/", element: <FeedPage /> },
			{ path: "/search", element: <SearchPage /> },
			{ path: "/user/:uniqueId", element: <UserPage /> },
		],
	},
]);
