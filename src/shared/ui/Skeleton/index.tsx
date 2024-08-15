import type { FC } from "react";

import { IonSkeletonText } from "@ionic/react";

import type { SkeletonProps } from "../../model/props";
import styles from "./styles.module.scss";

const Skeleton: FC<SkeletonProps> = ({
	count = 1,
	type = "item",
	direction = "column",
}) => {
	return (
		<section className={styles[direction]}>
			{type === "item" &&
				[...Array(count)].map((_, index) => (
					<article
						key={`skeleton_item_${index}`}
						className="min-h-full max-h-full relative flex gap-5 justify-center items-end md:py-5"
					>
						<IonSkeletonText
							animated
							className="m-0 h-full md:w-[430px] rounded-2xl"
						/>

						<div className="flex flex-col items-center">
							<IonSkeletonText
								animated
								className="m-0 size-12 rounded-full mb-5"
							/>
							<IonSkeletonText
								animated
								className="m-0 size-12 rounded-full mb-7"
							/>
							<IonSkeletonText
								animated
								className="m-0 size-12 rounded-full mb-7"
							/>
							<IonSkeletonText
								animated
								className="m-0 size-12 rounded-full mb-7"
							/>
							<IonSkeletonText animated className="m-0 size-12 rounded-full" />
						</div>
					</article>
				))}

			{type === "itemV2" &&
				[...Array(count)].map((_, index) => (
					<div key={`skeleton_itemV2_${index}`}>
						<IonSkeletonText class="m-0 pt-[135%] rounded-2xl" animated />

						<div className="px-2 pt-2 pb-6">
							<IonSkeletonText className="m-0 mt-1 h-6" animated />
							<div className="flex items-center gap-1">
								<IonSkeletonText
									className="m-0 mt-1 size-6 rounded-full"
									animated
								/>
								<IonSkeletonText
									className="m-0 mt-1 rounded-2xl h-1/2"
									animated
								/>
							</div>
						</div>
					</div>
				))}

			{type === "itemV3" &&
				[...Array(count)].map((_, index) => (
					<IonSkeletonText
						key={`skeleton_itemV2_${index}`}
						class="m-0 pt-[135%] rounded-2xl"
						animated
					/>
				))}
		</section>
	);
};

export default Skeleton;
