import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Header } from "widgets/header";

import { IonContent, IonButton, IonText } from "@ionic/react";
import { Link } from "react-router-dom";

import MenuWrapper from "../providers/MenuWrapper";

const ErrorLayouts: FC = () => {
	const { t } = useTranslation();

	return (
		<MenuWrapper>
			<Helmet>
				<title>{t("error.title")}</title>
			</Helmet>
			<Header />
			<IonContent>
				<div className="w-full h-full flex flex-col items-center justify-center gap-4">
					<IonText className="text-3xl font-bold">{t("error.oops")}</IonText>
					<IonText className="text-xl">{t("error.description")}</IonText>
					<IonText className="opacity-50">{t("error.notFound")}</IonText>
					<Link to={"/"}>
						<IonButton fill="clear">{t("error.mainPage")}</IonButton>
					</Link>
				</div>
			</IonContent>
		</MenuWrapper>
	);
};

export default ErrorLayouts;
