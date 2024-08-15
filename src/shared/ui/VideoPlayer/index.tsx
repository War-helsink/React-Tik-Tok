import { type FC, useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import type { OnProgressProps } from "react-player/base";

import { IonSkeletonText } from "@ionic/react";

import Control from "../Control";

import type { VideoPlayerProps } from "../../model/props";

const VideoPlayer: FC<VideoPlayerProps> = ({
	url,
	className = "",
	playing = false,
	loop = false,
	progressInterval = 1000,
	volume,
	controls = false,
	rounded = true,
	setVolume,
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

	const handleTogglePlayPause = () => {
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

	const handleChangeVolume = (value: number) => {
		if (setVolume) setVolume(value);
	};

	return (
		<div
			className={`w-full h-full relative ${rounded ? "rounded-2xl" : ""} overflow-hidden cursor-pointer group`}
		>
			<div className={`w-full h-full ${onReady ? "opacity-100" : "opacity-0"}`}>
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

			{controls && (
				<Control
					ref={progressRef}
					isPlaying={isPlaying}
					volume={volume}
					onTogglePlayPause={handleTogglePlayPause}
					onChangeVolume={handleChangeVolume}
				/>
			)}
		</div>
	);
};

export default VideoPlayer;
