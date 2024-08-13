import type { FC } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const VideoPage: FC = () => {
	const { videoId, uniqueId } = useParams();

	console.log(videoId, uniqueId);

	return (
		<>
			<Helmet>
				<title>Video {videoId}</title>
			</Helmet>
			<main className="w-full h-full">Video</main>
		</>
	);
};

export default VideoPage;
