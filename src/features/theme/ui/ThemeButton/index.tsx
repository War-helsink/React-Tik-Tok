import type { FC } from "react";
import { useTheme } from "app/providers/ThemeContext";

import { IonButton, IonIcon } from "@ionic/react";
import { sunny, moon } from "ionicons/icons";

const ThemeButton: FC = () => {
	const { isDark, toggleTheme } = useTheme();

	return (
		<IonButton color="medium" shape="round" onClick={toggleTheme}>
			<IonIcon slot="icon-only" icon={isDark ? sunny : moon} />
		</IonButton>
	);
};

export default ThemeButton;
