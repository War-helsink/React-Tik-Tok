import { type FC, useMemo } from "react";
import {
	IonIcon,
} from "@ionic/react";
import { musicalNotes } from "ionicons/icons";

import { Link } from "react-router-dom";
import VideoPlayer from "shared/ui/VideoPlayer";

import type { FeedVideoProps } from "../../model/props";

const FeedVideoDetails: FC<FeedVideoProps> = ({
	url,
	videoData,
	playing = false,
}) => {
	const titleWords = useMemo(() => {
		return videoData.title.trim().split(" ");
	}, [videoData]);

	return (
		<div className="relative h-full md:w-[430px]">
			<VideoPlayer
				controls
				loop
				playing={playing}
				progressInterval={500}
				url={url}
			/>

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
			</div>
		</div>
	);
};

export default FeedVideoDetails;
