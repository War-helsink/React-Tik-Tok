import type { Dispatch, SetStateAction } from "react";
import type { SkeletonType, DirectionType } from "shared/interfaces";

export interface VolumeControlProps {
	volume: number;
	onToggleMute: () => void
	onChangeVolume: (value: number) => void;
}

export interface ControlProps {
	isPlaying: boolean;
	volume: number;

	onTogglePlayPause: () => void;
	onChangeVolume: (value: number) => void;
}

export interface VideoPlayerProps {
	url: string;
	volume: number;

	className?: string;

	rounded?: boolean;
	controls?: boolean;
	playing?: boolean;
	loop?: boolean;
	progressInterval?: number;
	setVolume?: Dispatch<SetStateAction<number>>;
}

export interface SkeletonProps {
	count?: number;
	type: SkeletonType;
	direction: DirectionType;
}
