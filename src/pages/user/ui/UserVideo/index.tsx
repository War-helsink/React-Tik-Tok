import type { FC } from "react";
import { Link } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import { playOutline } from "ionicons/icons";

import { formatNumber } from "shared/helpers";
import VideoPlayer from "shared/ui/VideoPlayer";

import type { UserVideoProps } from "../../model/props";

const UserVideo: FC<UserVideoProps> = ({
	videoData,
	playing = false,
	onPlay,
}) => {
	const handleMouseOver = () => {
		onPlay();
	};

	return (
		<div className="w-full h-full min-h-96 flex flex-col gap-1">
			<Link
				to={`/${videoData.author.unique_id}/video/${videoData.video_id}`}
				className="relative w-full h-full"
				onMouseOver={handleMouseOver}
			>
				<VideoPlayer
					loop
					playing={playing}
					progressInterval={500}
					url={videoData.play}
					volume={0}
				/>
				<div className="absolute bottom-0 left-0 w-full px-3 pb-4 flex items-center gap-1">
					<IonIcon className="text-xl" icon={playOutline} />
					<span>{formatNumber(videoData.play_count)}</span>
				</div>
			</Link>
			<Link to={`/${videoData.author.unique_id}/video/${videoData.video_id}`}>
				<div className="w-full truncate">{videoData.title}</div>
			</Link>
		</div>
	);
};

export default UserVideo;
