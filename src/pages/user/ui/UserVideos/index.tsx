import { type FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { IonText } from "@ionic/react";

import { withSkeleton } from "shared/hoc";

import type { UserVideosProps } from "../../model/props";
import UserVideo from "../UserVideo";

const UserVideos: FC<UserVideosProps> = ({ videosData }) => {
	const [active, setActive] = useState(0);
	const { t } = useTranslation();

	return videosData.length ? (
		<div className="grid min-h-full grid-cols-auto-fit-minmax w-full gap-x-4 gap-y-6">
			{videosData.map((videoData, index) => (
				<UserVideo
					key={videoData.aweme_id}
					playing={active === index}
					videoData={videoData}
					onPlay={() => setActive(index)}
				/>
			))}
		</div>
	) : (
		<div className="flex w-full h-full flex-col justify-center items-center flex-grow p-5">
			<IonText className="text-3xl">{t("userVideos.noVideos")}</IonText>
			<p className="opacity-50">{t("userVideos.hidden")}</p>
		</div>
	);
};

export default withSkeleton(UserVideos, 12, "itemV3", "grid");
