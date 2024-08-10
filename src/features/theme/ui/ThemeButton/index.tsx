import React from "react";
import { ThemeContext, type IThemeContext } from "app/providers/ThemeContext";

import {
	IonButton,
	IonIcon,
} from "@ionic/react";
import { sunny, moon } from "ionicons/icons";

class ThemeButton extends React.Component {
	static contextType = ThemeContext;

	render() {
		const { isDark, toggleTheme } = this.context as IThemeContext;
		return (
			<IonButton color="medium" shape="round" onClick={toggleTheme}>
				<IonIcon slot="icon-only" icon={isDark ? sunny : moon} />
			</IonButton>
		);
	}
}

export default ThemeButton;
