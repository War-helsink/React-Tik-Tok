import type { FC } from "react";
import { useVolume } from "app/providers/VolumeContext";
import VideoPlayer from "shared/ui/VideoPlayer";

import type { SingleVideoProps } from "../../model/props";

const SingleVideo: FC<SingleVideoProps> = ({ videoData }) => {
	const { volume, setVolume } = useVolume();

	return (
		<section className="relative h-full px-20">
			<VideoPlayer
				loop
				controls
				rounded={false}
				playing={true}
				progressInterval={500}
				url={videoData.play}
				volume={volume}
				setVolume={setVolume}
			/>
		</section>
	);
};

export default SingleVideo;
