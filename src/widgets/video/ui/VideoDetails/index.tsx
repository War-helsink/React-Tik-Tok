import type { FC } from "react";
import { useVolume } from "app/providers/VolumeContext";
import { IonIcon } from "@ionic/react";
import { musicalNotes } from "ionicons/icons";

import { Link } from "react-router-dom";
import VideoPlayer from "shared/ui/VideoPlayer";

import type { VideoDetailsProps } from "../../model/props";

const VideoDetails: FC<VideoDetailsProps> = ({
	url,
	videoData,
	playing = false,
}) => {
	const { volume, setVolume } = useVolume();
	const titleWords = videoData.title.trim().split(" ");

	return (
		<div className="relative h-full md:w-[430px]">
			<VideoPlayer
				controls
				loop
				playing={playing}
				progressInterval={500}
				url={url}
				volume={volume}
				setVolume={setVolume}
			/>

			<div className="absolute bottom-0 left-0 pb-2 w-full px-3 z-10 text-tik-tok-default">
				<Link
					to={`/user/${videoData.author.unique_id}`}
					className="hover:underline"
				>
					<span>{videoData.author.unique_id}</span>
				</Link>

				<p className="truncate">
					{titleWords.map((word, index) => {
						if (word.includes("#")) {
							return (
								<Link
									to={`/tag/${word.replace("#", "")}`}
									key={`key_${index}_${word.replace("#", "")}`}
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
			</div>
		</div>
	);
};

export default VideoDetails;
