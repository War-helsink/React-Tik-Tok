import { type ForwardedRef, useCallback } from "react";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import { play, pause, volumeMediumOutline, volumeMute } from "ionicons/icons";

import { IonIcon, IonProgressBar } from "@ionic/react";

import { useAnimation } from "shared/hooks";

import VolumeControl from "../VolumeControl";
import type { ControlProps } from "../../model/props";
import styles from "./styles.module.scss";

const Control = forwardRef<HTMLIonProgressBarElement, ControlProps>(
	(
		{ isPlaying, volume, onChangeVolume, onTogglePlayPause },
		ref: ForwardedRef<HTMLIonProgressBarElement>,
	) => {
		const [animatedIsPlaying, setAnimatedIsPlaying] = useAnimation(500);
		const [animatedToggleMute, setAnimatedToggleMute] = useAnimation(500);

		const handleTogglePlayPause = useCallback(() => {
			setAnimatedIsPlaying(true);
			onTogglePlayPause();
		}, [onTogglePlayPause, setAnimatedIsPlaying]);

		const handleToggleMute = useCallback(() => {
			setAnimatedToggleMute(true);
			onChangeVolume(volume === 0 ? 1 : 0);
		}, [volume, onChangeVolume, setAnimatedToggleMute]);

		return (
			<div className="w-full h-full absolute top-0 left-0">
				<div className="relative w-full h-full">
					<div
						className={`transition-opacity duration-300 opacity-0 group-hover:opacity-100 absolute top-0 left-0 z-10 w-full flex items-center ${styles["bg-background-shadow"]}`}
					>
						<VolumeControl
							volume={volume}
							onToggleMute={handleToggleMute}
							onChangeVolume={onChangeVolume}
						/>
					</div>

					{animatedIsPlaying && (
						<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
							<motion.div
								initial={{ scale: 0, opacity: 1 }}
								animate={{ scale: 1, opacity: 0.5 }}
								transition={{
									duration: 0.5,
								}}
							>
								<div className="flex items-center justify-center text-6xl bg-background-contrast text-tik-tok-default rounded-full p-5">
									<IonIcon slot="icon-only" icon={isPlaying ? pause : play} />
								</div>
							</motion.div>
						</div>
					)}

					{animatedToggleMute && (
						<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
							<motion.div
								initial={{ scale: 0, opacity: 1 }}
								animate={{ scale: 1, opacity: 0.5 }}
								transition={{
									duration: 0.5,
								}}
							>
								<div className="flex items-center justify-center text-6xl bg-background-contrast text-tik-tok-default rounded-full p-5">
									<IonIcon
										slot="icon-only"
										icon={volume === 0 ? volumeMute : volumeMediumOutline}
									/>
								</div>
							</motion.div>
						</div>
					)}

					<div className="absolute w-full bottom-0 left-0">
						<IonProgressBar ref={ref} color="tik-tok-button" />
					</div>

					<div
						className="absolute w-full h-full top-0 left-0"
						onClick={handleTogglePlayPause}
					/>
				</div>
			</div>
		);
	},
);

export default Control;
