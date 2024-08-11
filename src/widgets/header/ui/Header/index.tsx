import React from "react";
import { Link } from "react-router-dom";

import {
	IonHeader,
	IonToolbar,
	IonButtons,
	IonButton,
	IonIcon,
	IonMenuButton,
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
					<IonButtons slot="start">
						<Link to={"/"}>
							<IonButton color="dark" className="hidden md:block normal-case">
								<h1 className="text-3xl font-bold">Tik Tok</h1>
							</IonButton>
						</Link>
						<IonMenuButton color="dark" className="block md:hidden" />
					</IonButtons>

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
