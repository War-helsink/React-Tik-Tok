export interface VideoPlayerProps {
	url: string;
	className?: string;

	controls?: boolean;
	playing?: boolean;
	loop?: boolean;
	progressInterval?: number;
	volume?: number;
}
