import type { SkeletonType, DirectionType } from "shared/interfaces";

export interface SkeletonProps {
	count?: number;
	type: SkeletonType;
	direction: DirectionType;
}

export interface VideoPlayerProps {
	url: string;
	className?: string;

	controls?: boolean;
	playing?: boolean;
	loop?: boolean;
	progressInterval?: number;
	volume?: number;
}
