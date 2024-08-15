import type { FC } from "react";
import { useTranslation } from "react-i18next";

const NotLoader: FC = () => {
	const { t } = useTranslation();

	return (
		<div className="w-full flex justify-center items-center p-4 rounded-lg shadow-lg">
			<p className="text-gray-600 dark:text-gray-300 text-lg font-semibold">
				{t("noMoreData")}
			</p>
		</div>
	);
};

export default NotLoader;
