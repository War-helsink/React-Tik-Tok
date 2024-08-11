import type { FC } from "react";
import { IonIcon, IonText } from "@ionic/react";
import { lockClosedOutline } from "ionicons/icons";

import type { UserLikedProps } from "../../model/props";

const UserLiked: FC<UserLikedProps> = ({ hidden, uniqueId }) => {
	return (
		<div
			className={`${hidden ? "hidden" : "flex"} flex-col justify-center items-center flex-grow w-full p-5`}
		>
			<h1 className="text-6xl">
				<IonIcon icon={lockClosedOutline} />
			</h1>
			<IonText className="text-3xl">
				This user's liked videos are private
			</IonText>
			<p className="opacity-50">
				Videos liked by {uniqueId} are currently hidden
			</p>
		</div>
	);
};

export default UserLiked;
