import type { FC } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import { playOutline } from "ionicons/icons";

import { formatNumber } from "shared/helpers";

import type { TikTokUserVideoProps } from "../../model/props";

const TikTokUserVideo: FC<TikTokUserVideoProps> = ({
	videoData,
	playing = false,
	onPlay,
}) => {
	const handleMouseOver = () => {
		onPlay();
	};

	return (
		<div className="w-full flex flex-col gap-1">
			<Link
				to={`/video/${videoData.video_id}`}
				className="relative"
				onMouseOver={handleMouseOver}
			>
				<ReactPlayer
					className="rounded-3xl"
					loop
					playing={playing}
					progressInterval={500}
					url={videoData.play}
					width="100%"
					height="auto"
					volume={0}
				/>
				<div className="absolute bottom-0 left-0 w-full px-3 pb-4 flex items-center gap-1">
					<IonIcon className="text-xl" icon={playOutline} />
					<span>{formatNumber(videoData.play_count)}</span>
				</div>
			</Link>
			<Link to={`/video/${videoData.video_id}`}>
				<div className="w-full truncate">{videoData.title}</div>
			</Link>
		</div>
	);
};

export default TikTokUserVideo;
