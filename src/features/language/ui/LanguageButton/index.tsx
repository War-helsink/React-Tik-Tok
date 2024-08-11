import type { FC } from "react";
import { useTranslation } from "react-i18next";

import { IonButton, IonSelect, IonSelectOption, IonIcon } from "@ionic/react";
import type { SelectChangeEventDetail } from "@ionic/react";
import { language as languageIcon } from "ionicons/icons";

import { useLanguage } from "app/providers/LanguageContext";
import { LANGUAGES_CODES } from "shared/config";

const LanguageButton: FC = () => {
	const { language, setLanguage } = useLanguage();
	const { t } = useTranslation("languages");

	const changeLanguage = (ev: CustomEvent<SelectChangeEventDetail>) => {
		setLanguage(ev.detail.value);
	};

	return (
		<IonSelect
			className="block w-12"
			slot="end"
			interface="popover"
			value={language}
			onIonChange={changeLanguage}
		>
			<IonButton slot="label" color="medium" shape="round">
				<IonIcon slot="icon-only" icon={languageIcon} />
			</IonButton>

			{LANGUAGES_CODES.map((languageCode) => (
				<IonSelectOption key={languageCode} value={languageCode}>
					{t(languageCode)}
				</IonSelectOption>
			))}
		</IonSelect>
	);
};

export default LanguageButton;
