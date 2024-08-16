import type { FC } from "react";
import { IonSpinner } from "@ionic/react";

import type { LoaderProps } from "../../model/props";

const Loader: FC<LoaderProps> = ({ className = "" }) => {
	return (
		<div
			className={`w-full h-full flex justify-center items-center ${className}`}
		>
			<IonSpinner name="circles" />
		</div>
	);
};

export default Loader;
