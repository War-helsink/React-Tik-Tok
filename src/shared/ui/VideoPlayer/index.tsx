import { type FC, useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import type { OnProgressProps } from "react-player/base";
import { play, pause, volumeMediumOutline} from "ionicons/icons";

import {
	IonIcon,
	IonButton,
	IonButtons,
	IonProgressBar,
	IonSkeletonText,
} from "@ionic/react";

import type { VideoPlayerProps } from "../../model/props";
import styles from "./styles.module.scss";

const VideoPlayer: FC<VideoPlayerProps> = ({
	url,
	className = "",
	playing = false,
	loop = false,
	progressInterval = 1000,
	volume = 1,
	controls = false,
}) => {
	const progressRef = useRef<HTMLIonProgressBarElement>(null);
	const [onReady, setOnReady] = useState(false);

	const [isPlaying, setIsPlaying] = useState(false);

	useEffect(() => {
		setIsPlaying(playing);
	}, [playing]);

	const loadingOnReady = () => {
		setOnReady(true);
	};

	const handleClick = () => {
		setIsPlaying((prev) => !prev);
	};

	const handleProgress = (state: OnProgressProps) => {
		if (progressRef.current) progressRef.current.value = state.played;
	};

	const handlePlay = () => {
		if (!isPlaying) setIsPlaying(true);
	};

	const handlePause = () => {
		if (isPlaying) setIsPlaying(false);
	};

	return (
		<div
			className="relative rounded-2xl overflow-hidden cursor-pointer"
			onClick={handleClick}
		>
			<div className={`${onReady ? "opacity-100" : "opacity-0"}`}>
				<ReactPlayer
					className={`${className}`}
					loop={loop}
					playing={isPlaying}
					progressInterval={progressInterval}
					url={url}
					width="100%"
					height="100%"
					volume={volume}
					onProgress={handleProgress}
					onReady={loadingOnReady}
					onPlay={handlePlay}
					onPause={handlePause}
				/>
			</div>
			<IonSkeletonText
				animated
				className={`${onReady ? "hidden" : "block"} absolute top-0 left-0 w-full h-full m-0 -z-10`}
			/>

			{controls ? (
				<div className="absolute w-full h-full inset-0 z-10 group">
					<div className="relative w-full h-full p-1">
						<div className={`transition-opacity duration-300 opacity-0 group-hover:opacity-100 absolute top-0 left-0 w-full ${styles["bg-background-shadow"]}`}>
							<IonButtons>
								<IonButton shape="round" color="tik-tok">
									<IonIcon slot="icon-only" icon={volumeMediumOutline} />
								</IonButton>
							</IonButtons>
						</div>
						<div className="transition-opacity duration-300 opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
							<IonButtons>
								<IonButton shape="round" color="tik-tok">
									<IonIcon slot="icon-only" icon={isPlaying ? pause : play} />
								</IonButton>
							</IonButtons>
						</div>

						<div className="absolute w-full bottom-0 left-0">
							<IonProgressBar ref={progressRef} color="tik-tok-button" />
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default VideoPlayer;
