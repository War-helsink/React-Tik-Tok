export type Volume = number & { __volumeBrand: "Volume" };

export function createVolume(value: number): Volume {
	if (value >= 0 && value <= 1) {
		return value as Volume;
	}
	throw new Error("Value is out of range. It should be between 0 and 1.");
}

export function isVolumeInRange(volume: number): boolean {
	return volume >= 0 && volume <= 1;
}
