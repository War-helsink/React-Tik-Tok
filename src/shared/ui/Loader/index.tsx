import type { FC } from "react";
import { IonSpinner } from "@ionic/react";

const Loader: FC = () => {
	return (
		<div className="w-full h-full flex justify-center items-center">
			<IonSpinner name="circles" />
		</div>
	);
};

export default Loader;
