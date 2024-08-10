import React from "react";

import {
	IonHeader,
	IonToolbar,
	IonButtons,
	IonButton,
	IonIcon,
} from "@ionic/react";
import { logoGithub } from "ionicons/icons";

import { ThemeButton } from "features/theme";
import { GITHUB_URL } from "shared/config";

import styles from "./styles.module.scss";

class Header extends React.Component<unknown> {
	render() {
		return (
			<IonHeader>
				<IonToolbar className={styles.header}>
					<div className={styles.navbar} slot="end" />

					<IonButtons slot="end">
						<ThemeButton />

						<IonButton
							color="medium"
							shape="round"
							target="_blank"
							href={GITHUB_URL}
						>
							<IonIcon slot="icon-only" icon={logoGithub} />
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
		);
	}
}

export default Header;
