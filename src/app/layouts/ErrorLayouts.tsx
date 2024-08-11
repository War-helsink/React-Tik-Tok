import type { FC } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "widgets/header";

import { IonContent, IonButton, IonText } from "@ionic/react";
import { Link } from "react-router-dom";

import MenuWrapper from "../providers/MenuWrapper";

const ErrorLayouts: FC = () => {
	return (
		<MenuWrapper>
			<Helmet>
				<title>Not Found!</title>
			</Helmet>
			<Header />
			<IonContent>
				<div className="w-full h-full flex flex-col items-center justify-center gap-4">
					<IonText className="text-3xl font-bold">Oops!</IonText>
					<IonText className="text-xl">
						Sorry, an unexpected error has occurred.
					</IonText>
					<IonText className="opacity-50">Not Found</IonText>
					<Link to={"/"}>
						<IonButton fill="clear">On the main page</IonButton>
					</Link>
				</div>
			</IonContent>
		</MenuWrapper>
	);
};

export default ErrorLayouts;
