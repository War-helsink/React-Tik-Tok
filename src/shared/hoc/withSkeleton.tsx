import Skeleton from "shared/ui/Skeleton";
import type { SkeletonProps } from "shared/model/props";

interface Props {
	isLoading?: boolean;
}

export function withSkeleton<P extends object>(
	Component: React.ComponentType<P>,
	count: number,
	type: SkeletonProps["type"] = "item",
	direction: SkeletonProps["direction"] = "column",
) {
	return function WithSkeleton(props: Props & P) {
		const { isLoading = true, ...restProps } = props;

		if (isLoading) {
			return <Skeleton type={type} count={count} direction={direction} />;
		}

		return <Component {...(restProps as P)} />;
	};
}
