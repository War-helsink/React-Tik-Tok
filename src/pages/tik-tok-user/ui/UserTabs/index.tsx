import { type FC, useState } from "react";

import {
	IonIcon,
	IonLabel,
	IonToolbar,
	IonSegment,
	IonSegmentButton,
	IonText,
} from "@ionic/react";
import type { SegmentChangeEventDetail } from "@ionic/react";

import { lockClosed, lockClosedOutline } from "ionicons/icons";

import type { TikTokUserTabsProps } from "../../model/props";
import styles from "./styles.module.scss";

import TikTokUserVideos from "../UserVideos";

const TikTokUserTabs: FC<TikTokUserTabsProps> = ({ user }) => {
	const [segment, setSegment] = useState("video");

	const handleChangeSegment = (ev: CustomEvent<SegmentChangeEventDetail>) => {
		setSegment(ev.detail.value as string);
	};

	return (
		<div className="flex-grow flex flex-col">
			<IonToolbar className={`${styles.block} mb-6`}>
				<IonSegment
					value={segment}
					onIonChange={handleChangeSegment}
					className="min-w-fit"
				>
					<IonSegmentButton value="video">
						<IonLabel>Videos</IonLabel>
					</IonSegmentButton>
					<IonSegmentButton value="liked">
						<IonLabel className="m-0">
							<IonIcon icon={lockClosed} />
							Liked
						</IonLabel>
					</IonSegmentButton>
				</IonSegment>
			</IonToolbar>
			<div className="flex-grow flex flex-col">
				{user.privateAccount ? (
					<div className="flex flex-col justify-center items-center flex-grow w-full p-5">
						<h1 className="text-6xl">
							<IonIcon icon={lockClosedOutline} />
						</h1>
						<IonText className="text-3xl">This user's private</IonText>
						<p className="opacity-50">
							Videos liked by {user.uniqueId} are currently hidden
						</p>
					</div>
				) : (
					<>
						<TikTokUserVideos hidden={segment !== "video"} />
						<div
							className={`${segment === "liked" ? "flex" : "hidden"} flex-col justify-center items-center flex-grow w-full p-5`}
						>
							<h1 className="text-6xl">
								<IonIcon icon={lockClosedOutline} />
							</h1>
							<IonText className="text-3xl">
								This user's liked videos are private
							</IonText>
							<p className="opacity-50">
								Videos liked by {user.uniqueId} are currently hidden
							</p>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default TikTokUserTabs;
