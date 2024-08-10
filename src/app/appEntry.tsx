import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { IonApp } from "@ionic/react";

import { ThemeProvider } from "./providers/ThemeContext";
import { store } from "./appStore";

import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./appRouter";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import "@ionic/react/css/palettes/dark.class.css";

import { setupIonicReact } from "@ionic/react";

setupIonicReact();

import "./index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<IonApp>
			<ThemeProvider>
				<Provider store={store}>
					<HelmetProvider>
						<RouterProvider router={appRouter} />
					</HelmetProvider>
				</Provider>
			</ThemeProvider>
		</IonApp>
	</React.StrictMode>,
);
