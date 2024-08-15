import { type FC, useCallback, useState } from "react";

import { volumeMediumOutline, volumeMute } from "ionicons/icons";

import {
	IonIcon,
	IonButton,
	IonButtons,
	IonRange,
	type RangeChangeEventDetail,
} from "@ionic/react";

import type { VolumeControlProps } from "../../model/props";
import styles from "./styles.module.scss";

const VolumeControl: FC<VolumeControlProps> = ({ volume, onChangeVolume, onToggleMute}) => {
	const [isHovered, setIsHovered] = useState(false);

	const handleVolumeChange = useCallback(
		(ev: CustomEvent<RangeChangeEventDetail>) => {
			onChangeVolume(Number(ev.detail.value) / 100);
		},
		[onChangeVolume],
	);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	return (
		<div
			className="flex items-center"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<IonButtons>
				<IonButton shape="round" color="tik-tok" onClick={onToggleMute}>
					<IonIcon
						slot="icon-only"
						icon={volume === 0 ? volumeMute : volumeMediumOutline}
					/>
				</IonButton>
			</IonButtons>

			{volume !== 0 && isHovered && (
				<div className="w-16 bg-background-contrast px-3 py-1 rounded-full">
					<IonRange
						className={styles.range}
						color="tik-tok"
						min={0}
						max={100}
						value={volume * 100}
						onIonChange={handleVolumeChange}
					/>
				</div>
			)}
		</div>
	);
};

export default VolumeControl;
