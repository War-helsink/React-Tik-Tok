import { type FC, useState, useRef, useMemo, useEffect } from "react";
import ReactPlayer from "react-player";
import {
	IonIcon,
	IonButton,
	IonButtons,
	IonProgressBar,
	IonSkeletonText,
} from "@ionic/react";
import { play, pause, musicalNotes } from "ionicons/icons";

import { Link } from "react-router-dom";

import type { OnProgressProps } from "react-player/base";
import type { VideoProps } from "../../model/props";
import "./styles.scss";

const VideoDetails: FC<VideoProps> = ({
	url,
	videoId,
	videoData,
	playing = false,
}) => {
	const progressRef = useRef<HTMLIonProgressBarElement>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [onReady, setOnReady] = useState(false);

	const titleWords = useMemo(() => {
		return videoData.title.trim().split(" ");
	}, [videoData]);

	useEffect(() => {
		setIsPlaying(playing);
	}, [playing]);

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
		<div className="relative h-full group md:w-[420px]">
			<Link to={`/video/${videoId}`}>
				<div className={`${onReady ? "opacity-100" : "opacity-0"}`}>
					<ReactPlayer
						className="rounded-3xl"
						loop
						playing={isPlaying}
						progressInterval={500}
						url={url}
						width="100%"
						height="100%"
						onProgress={handleProgress}
						onPlay={handlePlay}
						onPause={handlePause}
						onReady={() => {
							setOnReady(true);
						}}
					/>
				</div>
				<IonSkeletonText
					animated
					className={`${onReady ? "hidden" : "block"} absolute top-0 left-0 w-full h-full m-0 rounded-3xl -z-10`}
				/>
			</Link>

			<div className="absolute bottom-0 left-0 pb-2 w-full px-3 z-10 text-tik-tok-default">
				<Link
					to={`/user/${videoData.author.unique_id}`}
					className="hover:underline"
				>
					<span>{videoData.author.unique_id}</span>
				</Link>

				<p className="truncate">
					{titleWords.map((word) => {
						if (word.includes("#")) {
							return (
								<Link
									to={`/tag/${word.replace("#", "")}`}
									key={word}
									className="hover:underline"
								>
									{`${word} `}
								</Link>
							);
						}

						return `${word} `;
					})}
				</p>

				<p className="flex items-center gap-1">
					<IonIcon icon={musicalNotes} />
					<Link
						to={`/music/${videoData.music_info.id}`}
						className="hover:underline"
					>
						{videoData.music_info.title}
					</Link>
				</p>

				<div className="hidden group-hover:flex left-0 bottom-0 z-10 w-full items-center">
					<IonButtons>
						<IonButton shape="round" color="tik-tok" onClick={handleClick}>
							<IonIcon slot="icon-only" icon={isPlaying ? pause : play} />
						</IonButton>
					</IonButtons>
					<IonProgressBar ref={progressRef} color="tik-tok" />
				</div>
			</div>
		</div>
	);
};

export default VideoDetails;
