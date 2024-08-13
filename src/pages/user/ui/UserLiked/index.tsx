import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { IonIcon, IonText } from "@ionic/react";
import { lockClosedOutline } from "ionicons/icons";

import type { UserLikedProps } from "../../model/props";

const UserLiked: FC<UserLikedProps> = ({ uniqueId }) => {
	const { t } = useTranslation();

	return (
		<div
			className="flex flex-col justify-center items-center flex-grow w-full p-5"
		>
			<h1 className="text-6xl">
				<IonIcon icon={lockClosedOutline} />
			</h1>
			<IonText className="text-3xl">{t("userLiked.title")}</IonText>
			<p className="opacity-50">{t("userLiked.description", { uniqueId })}</p>
		</div>
	);
};

export default UserLiked;
