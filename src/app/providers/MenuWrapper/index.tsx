import type { ReactNode, FC } from "react";
import { Link } from "react-router-dom";

import {
	IonContent,
	IonHeader,
	IonMenu,
	IonPage,
	IonButton,
	IonButtons,
	IonToolbar,
	IonList,
} from "@ionic/react";

import styles from "./styles.module.scss";

interface MenuWrapperProps {
	children: ReactNode;
}

const MenuWrapper: FC<MenuWrapperProps> = ({ children }) => {
	return (
		<>
			<IonMenu contentId="main-content">
				<IonHeader>
					<IonToolbar className={styles.header}>
						<IonButtons slot="start">
							<Link to={"/"}>
								<IonButton color="dark">
									<div className="flex flex-col items-start">
										<h1 className="text-3xl font-bold">Tik Tok</h1>
									</div>
								</IonButton>
							</Link>
						</IonButtons>
					</IonToolbar>
				</IonHeader>
				<IonContent>
					<IonList className="py-0">
						
					</IonList>
				</IonContent>
			</IonMenu>
			<IonPage id="main-content">{children}</IonPage>
		</>
	);
};

export default MenuWrapper;
