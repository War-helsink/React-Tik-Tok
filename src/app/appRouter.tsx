import { createBrowserRouter } from "react-router-dom";
import BaseLayouts from "./layouts/BaseLayouts";
import ErrorLayouts from "./layouts/ErrorLayouts";

import { TikTokPage } from "pages/tik-tok";
import { TikTokUserPage } from "pages/tik-tok-user";

export const appRouter = createBrowserRouter([
	{
		element: <BaseLayouts />,
		errorElement: <ErrorLayouts />,
		children: [
			{ path: "/", element: <TikTokPage /> },
			{ path: "/user/:uniqueId", element: <TikTokUserPage /> },
		],
	},
]);
