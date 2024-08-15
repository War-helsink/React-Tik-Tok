import type { FC } from "react";
import { Link } from "react-router-dom";

import { IonIcon, IonAvatar } from "@ionic/react";
import { playOutline } from "ionicons/icons";

import { formatNumber } from "shared/helpers";
import VideoPlayer from "shared/ui/VideoPlayer";

import type { SearchVideoItemProps } from "../../model/props";

const SearchVideoItem: FC<SearchVideoItemProps> = ({
	videoData,
	playing = false,
	onPlay,
}) => {
	const titleWords = videoData.title.trim().split(" ");

	const handleMouseOver = () => {
		onPlay();
	};

	return (
		<div className="h-full w-custom-width">
			<div className="relative w-full">
				<div className="pt-[135%]">
					<Link
						to={`/${videoData.author.unique_id}/video/${videoData.video_id}`}
						onMouseOver={handleMouseOver}
						className="absolute top-0 left-0 w-full h-full"
					>
						<VideoPlayer
							loop
							playing={playing}
							progressInterval={500}
							url={videoData.play}
							volume={0}
						/>
					</Link>
				</div>
			</div>

			<div className="px-2 pt-2 pb-6">
				<div className="w-full truncate mt-1">
					{titleWords.map((word, index) => {
						if (word.includes("#")) {
							return (
								<Link
									to={`/tag/${word.replace("#", "")}`}
									key={`key_${index}_${word.replace("#", "")}`}
									className="hover:underline text-primary-default"
								>
									{`${word} `}
								</Link>
							);
						}

						return `${word} `;
					})}
				</div>

				<div className="mt-1 flex justify-between items-center">
					<Link
						to={`/user/${videoData.author.unique_id}`}
						className="flex items-center group"
					>
						<IonAvatar className="size-6">
							<img alt="Avatar" src={videoData.author.avatar} />
						</IonAvatar>

						<p className="group-hover:underline px-1">
							{videoData.author.unique_id}
						</p>
					</Link>

					<div className="flex items-center gap-1 opacity-75">
						<IonIcon className="text-xl" icon={playOutline} />
						<span>{formatNumber(videoData.play_count)}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchVideoItem;
